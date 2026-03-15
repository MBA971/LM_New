import Link from "next/link";

export default function Help() {
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
              Help & Support
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Need help? We're here for you. Find answers to common questions or get in touch with our support team.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I enroll in a course?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Simply browse our course catalog, click on a course you're interested in, and click the "Enroll Now" button. 
                  You'll need to create an account if you don't have one already.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Are there any free courses?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! We offer a selection of free courses in various subjects. Look for the "Free" badge on course cards.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I track my progress?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your progress is automatically tracked as you complete lessons and quizzes. You can view your progress 
                  on your dashboard and within each course page.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  What if I need help with a course?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Each course has a discussion forum where you can ask questions and get help from instructors and 
                  fellow students. You can also contact our support team for technical issues.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Support
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              If you can't find the answer to your question in the FAQ, please don't hesitate to reach out to our 
              support team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600">📧</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Email Support</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    support@edulearn.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600">💬</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Live Chat</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Available Monday-Friday, 9am-6pm EST
                  </p>
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