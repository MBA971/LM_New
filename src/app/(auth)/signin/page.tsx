import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-2xl font-bold text-indigo-600">
            Sign in to EduLearn
          </h2>
          <p className="text-center text-slate-500">
            Access your courses and track your progress
          </p>
        </div>
        <form className="space-y-6" action="#" onSubmit={(e) => {
          e.preventDefault();
          // In a real app, we would use next-auth's signIn function
          // For now, we'll just simulate a successful sign-in
          alert("Sign in functionality would be implemented here with next-auth");
        }}>
          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-md rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-md rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password&apos;
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-slate-500">
          Sign in with
          <div className="flex items-center justify-center mt-3">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 hover:border-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 text-slate-500"><path fill="currentColor" d="M24 12c2.21 0 4.17.81 5.65 2.04l4.77-4.77C31.95 5.48 28.05 4 24 4 13.25 4 4 13.25 4 24s9.25 20 20 20 20-9.25 20-20S34.75 4 24 4zm0 42c-9.94 0-18-8.06-18-18s8.06-18 18-18 18 8.06 18 18-8.06 18-18 18z"/></svg>
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 hover:border-slate-300 ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-slate-500"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387-.15.11-.31.17-.48.17-.42 0-.83-.14-1.13-.38-.352-.688-.845-2.894.845-6.166 0-.94.33-1.743.854-2.362-.105-.253-.18-.54-.18-.8v-.03c.41-.29.81-.66 1.12-1.08-.81.15-1.66.24-2.53.24-.62 0-1.21-.2-1.7-.55v-.02c.6.38 1.31.58 2.1.58 4.25 0 7.7-3.406 7.7-7.703 0-.42-.09-.825-.26-1.22l-1.19-.1c-.4.67-.91 1.14-1.62 1.14-.81 0-1.5-.27-2.01-.76l-.06-.01c1.16.72 2.55 1.14 4.18 1.14 4.59 0 8.3-3.719 8.3-8.302 0-.46-.08-.91-.23-1.32l-.19-.02c.75-.41 1.41-1.09 1.41-1.97 0-1.28-.96-2.33-2.14-2.33-1.18 0-2.18.69-2.73 1.69l-.2.02c-.62-.36-1.25-.88-1.25-1.61 0-1.01.61-1.84 1.42-1.84 1.04 0 1.95.41 2.4 1.02l1.48-.08c-.51.63-1.01 1.36-1.01 2.18 0 1.49 1.07 2.68 2.4 2.68 1.57 0 2.94-.91 3.51-2.36l-.42.01z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-center">
          <Link href="/auth/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}