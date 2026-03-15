import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 900000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5 // max requests per window

function getIP(req: NextRequest): string {
  // Get IP from various headers or connection info
  // @ts-ignore - socket property exists at runtime but not in types
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') || // Cloudflare
    // @ts-ignore - socket property exists at runtime but not in types
    req.socket?.remoteAddress ||
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  
  if (!record) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS
    })
    return false
  }
  
  if (now > record.resetTime) {
    // Reset the window
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS
    })
    return false
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }
  
  // Increment count
  record.count++
  rateLimitStore.set(ip, record)
  return false
}

export function middleware(req: NextRequest) {
  const ip = getIP(req)
  
  // Apply rate limiting to auth endpoints
  if (req.nextUrl.pathname.startsWith('/api/auth')) {
    if (isRateLimited(ip)) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
  }
  
  // Security headers
  const response = NextResponse.next()
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')
  
  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  // Enable XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';"
  )
  
  // Remove powered-by header
  response.headers.set('X-Powered-By', '')
  
  return response
}

export const config = {
  matcher: [
    '/api/auth/:path*',
    '/auth/signin',
    '/auth/signup',
    '/api/:path*'
  ],
}