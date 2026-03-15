import Link from "next/link";

export default function Pricing() {
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
              Pricing Plans
            </h1>
             <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
               Choose the plan that&apos;s right for you. All plans include access to our full course library, 
               progress tracking, and certificates of completion.
             </p>
          </section>

          <section className="mb-16">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {/* Free Plan */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                  Free
                </h3>
                <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
                  $0
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
                  / month
                </p>
                <ul className="list-none space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Access to free courses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Basic progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Community support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-slate-400">✗</span>
                    <span className="ml-2">Certificates of completion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-slate-400">✗</span>
                    <span className="ml-2">Exclusive course access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-slate-400">✗</span>
                    <span className="ml-2">Priority support</span>
                  </li>
                </ul>
                <Link
                  href="/auth/signup"
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                  Pro
                </h3>
                <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
                  $19
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
                  / month
                </p>
                <ul className="list-none space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Access to all courses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Advanced progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Certificates of completion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Exclusive course access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Priority email support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-slate-400">✗</span>
                    <span className="ml-2">1-on-1 tutoring</span>
                  </li>
                </ul>
                <Link
                  href="/auth/signup"
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Get Started Pro
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                  Enterprise
                </h3>
                <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
                  Custom
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
                  / month
                </p>
                <ul className="list-none space-y-4 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indico-500">✓</span>
                    <span className="ml-2">Unlimited users</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Custom course creation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">Priority phone support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500">✓</span>
                    <span className="ml-2">1-on-1 tutoring</span>
                  </li>
                </ul>
                <button
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Contact Sales
                </button>
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