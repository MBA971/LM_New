import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">EduLearn</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-indigo-400">
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help! Please fill out the form below 
              and we'll get back to you as soon as possible.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Office
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">EduLearn Headquarters</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    123 Education Avenue
                    Learning City, LC 45678
                    United States
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Phone: +1 (555) 123-4567
                    Email: contact@edulearn.com
                  </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
                {/* Placeholder for map */}
                <div className="h-full w-full flex items-center justify-center bg-slate-300 dark:bg-slate-600">
                  <span className="text-slate-500 dark:text-slate-400">Map Placeholder</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-center md:text-left">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">EduLearn</span>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-slate-600 dark:text-slate-400">
              <span>&copy; 2026 EduLearn. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}