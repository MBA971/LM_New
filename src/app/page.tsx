import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-white">EduLearn</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-white/80 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="text-white hover:text-white/80 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Master new skills with expert-led courses. Track your progress, take quizzes, 
              and earn certificates. Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Start Learning Free
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose EduLearn?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert-Led Courses</h3>
                <p className="text-white/60">
                  Learn from industry experts with years of experience in their field.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Track Progress</h3>
                <p className="text-white/60">
                  Monitor your learning journey with detailed progress tracking and analytics.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Earn Certificates</h3>
                <p className="text-white/60">
                  Get recognized certificates upon course completion to showcase your skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Popular Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-40 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
                  <span className="text-4xl">⚛️</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">React Development</h3>
                  <p className="text-white/60 text-sm mb-3">
                    Build modern web applications with React, hooks, and Next.js
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400 font-semibold">$29.99</span>
                    <span className="text-white/60 text-sm">856 students</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-40 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center">
                  <span className="text-4xl">🐍</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Python for Beginners</h3>
                  <p className="text-white/60 text-sm mb-3">
                    Learn Python programming from scratch with hands-on projects
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">Free</span>
                    <span className="text-white/60 text-sm">1.8k students</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <div className="h-40 bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
                  <p className="text-white/60 text-sm mb-3">
                    Master design principles and create stunning user interfaces
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-semibold">$39.99</span>
                    <span className="text-white/60 text-sm">642 students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/courses"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-white/60 text-sm">React Developer</p>
                  </div>
                </div>
                  <p className="text-white/70">
                    &apos;EduLearn transformed my career. The courses are well-structured and the 
                    instructors are incredibly knowledgeable. I went from beginner to pro in just 3 months!&apos;
                  </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Sarah Miller</p>
                    <p className="text-white/60 text-sm">Data Scientist</p>
                  </div>
                </div>
                  <p className="text-white/70">
                    &apos;The Python course was fantastic! The hands-on projects helped me build 
                    a strong portfolio. I landed my dream job within weeks of completing the course.&apos;
                  </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join thousands of learners and start building your future today.
            </p>
            <Link
              href="/auth/signup"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started for Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🎓</span>
                <span className="text-xl font-bold text-white">EduLearn</span>
              </div>
              <p className="text-white/60">
                Empowering learners worldwide with quality education.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2026 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}