import Link from "next/link";

export default function Courses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <Link href="/courses/create" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Create Course
        </Link>
      </div>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414L4.706 9.829a1 1 0 00-1.415 1.415A5.972 5.972 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <select className="border border-slate-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Categories</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mock course cards - in real app, these would come from DB */}
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">📚</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">JavaScript Fundamentals</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Learn the basics of JavaScript programming language including variables, functions, objects, and ES6+ features.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">Free</span>
              <span className="text-sm text-slate-500">Beginner</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 1.2k students</span>
              <span>⭐ 4.8</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/javascript-fundamentals"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">⚛️</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">React Development</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Build modern web applications with React, including hooks, context, routing, and state management.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">$29.99</span>
              <span className="text-sm text-slate-500">Intermediate</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 856 students</span>
              <span>⭐ 4.9</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/react-development"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">📊</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Data Science Basics</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Introduction to data analysis, statistics, and visualization using Python and popular libraries.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">Free</span>
              <span className="text-sm text-slate-500">Beginner</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 2.1k students</span>
              <span>⭐ 4.7</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/data-science-basics"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">🎨</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">UI/UX Design Principles</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Learn the fundamentals of user interface and user experience design for creating intuitive digital products.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">$39.99</span>
              <span className="text-sm text-slate-500">Beginner</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 642 students</span>
              <span>⭐ 4.6</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/ui-ux-design"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">💼</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Digital Marketing Strategy</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Master modern digital marketing techniques including SEO, social media, email marketing, and analytics.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">$49.99</span>
              <span className="text-sm text-slate-500">Intermediate</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 478 students</span>
              <span>⭐ 4.8</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/digital-marketing"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-indigo-50 flex items-center justify-center">
            <span className="text-indigo-500 text-3xl">🐍</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Python for Beginners</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-2">
              Learn Python programming from scratch, covering basics, data structures, file handling, and simple projects.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-indigo-600 font-medium mr-3">Free</span>
              <span className="text-sm text-slate-500">Beginner</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <span className="mr-2">👥 1.8k students</span>
              <span>⭐ 4.9</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Link
              href="/courses/python-beginners"
              className="w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-1">
          <button className="px-3 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
            «
          </button>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            1
          </button>
          <button className="px-3 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
            2
          </button>
          <button className="px-3 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
            3
          </button>
          <button className="px-3 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
            »
          </button>
        </div>
      </div>
    </div>
  );
}