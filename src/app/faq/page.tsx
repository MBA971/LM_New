import Link from "next/link";

export default function FAQ() {
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
              Frequently Asked Questions
            </h1>
             <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
               Find answers to common questions about EduLearn. If you don&apos;t see your question here, 
               please contact our support team.
             </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Getting Started
            </h2>
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I create an account?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Click on the &quot;Sign Up&quot; button on the homepage or navigate to /auth/signup to create 
                  your account. You&apos;ll need to provide your email, name, and a password.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Are there any free courses available?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! We offer a variety of free courses across different subjects. Look for the &quot;Free&quot; badge on course cards in our catalog.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I enroll in a course?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Once you&apos;re logged in, browse the course catalog, click on a course you&apos;re interested in, 
                  and click the &quot;Enroll Now&quot; button. You&apos;ll have immediate access to the course content.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Learning Experience
            </h2>
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I track my progress?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your progress is automatically tracked as you complete lessons and quizzes. 
                  You can view your progress on your dashboard and within each course page.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Are the courses self-paced?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! All courses on EduLearn are self-paced. You can learn at your own speed 
                  and revisit lessons as many times as you need.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How do I take a quiz?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Quizzes are located at the end of course modules. Simply navigate to the quiz 
                  section and click &quot;Start Quiz&quot; to begin. You&apos;ll receive immediate feedback 
                  upon completion.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Support
            </h2>
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  I&apos;m having trouble logging in. What should I do?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  First, double-check your email and password. If you&apos;ve forgotten your password, 
                  click the &quot;Forgot password?&quot; link on the sign-in page to reset it. 
                  If the problem persists, contact our support team.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Are EduLearn courses accessible on mobile devices?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! Our platform is fully responsive and works on all devices, including 
                  smartphones and tablets. You can also download our mobile app for iOS and Android.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  What browsers do you support?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We support the latest versions of Chrome, Firefox, Safari, and Edge. 
                  For the best experience, please keep your browser up to date.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Certificates and Accreditation
            </h2>
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Do I receive a certificate upon course completion?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! Upon completing a course, you&apos;ll receive a certificate of completion 
                  that you can download and share on your resume or LinkedIn profile.
                </p>
              </div>
              <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Are EduLearn courses accredited?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  While our courses are not formally accredited by universities, they are 
                  created by industry experts and designed to provide practical, job-ready skills.
                </p>
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