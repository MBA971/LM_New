import Link from "next/link";

export default function About() {
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
              About EduLearn
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              EduLearn is a comprehensive learning management system designed to empower students and educators 
              with cutting-edge educational technology. Our platform combines innovative teaching methodologies 
              with robust learning tools to create an unparalleled educational experience.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              At EduLearn, we believe that education should be accessible, engaging, and effective for everyone. 
              Our mission is to democratize learning by providing high-quality educational resources that adapt 
              to individual learning styles and paces.
            </p>
            <ul className="list-disc list-inside space-y-4 text-slate-600 dark:text-slate-400">
              <li>Provide accessible education to learners worldwide</li>
              <li>Foster a community of lifelong learners</li>
              <li>Innovate continuously to improve learning outcomes</li>
              <li>Support educators with powerful teaching tools</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              We envision a world where every individual has access to personalized, high-quality education that 
              empowers them to reach their full potential. Through technology and pedagogy, we aim to break down 
              barriers to learning and create opportunities for growth and success.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-indigo-600">👩‍🏫</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Dr. Alice Johnson</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Chief Education Officer</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-indigo-600">👨‍💻</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Michael Chen</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lead Software Engineer</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-indigo-600">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Sarah Williams</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Head of Curriculum Design</p>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-indigo-600">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">David Rodriguez</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Global Partnerships Director</p>
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