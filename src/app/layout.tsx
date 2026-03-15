import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduLearn LMS",
  description: "A comprehensive learning management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} min-h-screen bg-slate-50 text-slate-800>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md hidden md:block">
            <Sidebar />
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-white shadow-sm z-20">
              <TopNav />
            </header>
            <section className="flex-1 p-6 overflow-y-auto">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}

// Sidebar component
function Sidebar() {
  return (
    <div className="flex flex-col h-full p-4 space-y-6">
      <div className="flex items-center space-x-3">
        <h2 className="text-xl font-bold text-indigo-600">EduLearn</h2>
      </div>
      <nav className="flex-1 space-y-2">
        <Link href="/dashboard" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600">
          <MenuIcon className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link href="/courses" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600">
          <BookOpenIcon className="w-5 h-5 mr-3" />
          Courses
        </Link>
        <Link href="/profile" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600">
          <UserIcon className="w-5 h-5 mr-3" />
          Profile
        </Link>
      </nav>
      <div className="border-t pt-4">
        <a
          href="/admin"
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50"
        >
          <ShieldIcon className="w-5 h-5 mr-3" />
          Admin Panel
        </a>
      </div>
    </div>
  );
}

// TopNav component
function TopNav() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden p-2 rounded-md hover:bg-indigo-50"
          id="sidebar-toggle"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-indigo-50">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40?img=7"
            alt="User avatar"
            className="w-10 h-10 rounded-full border-2 border-indigo-200"
          />
        </div>
      </div>
    </div>
  );
}

// Icons from Heroicons
type IconProps = {
  className?: string;
};

function MenuIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function BookOpenIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v18m8.25 0v-18M3 7.5h18"
      />
    </svg>
  );
}

function UserIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.206 8.994a4.5 4.5 0 016.364 0M12 6.75a3 3 0 01-3 3 3 3 0 00-3 3 3 3 0 01-3 3 3 3 0 003 6m0-9a3 3 0 013 3 3 3 3 0 003-3z"
      />
    </svg>
  );
}

function BellIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.454 1.31zM6.75 12a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );
}