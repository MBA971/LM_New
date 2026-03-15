export default function Admin() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚙️</span>
              <span className="text-xl font-bold text-indigo-600">Admin Dashboard</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/profile" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Profile
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Admin Overview</h1>
            <p className="text-slate-600">
              Manage users, courses, and platform settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-indigo-600">Users</h3>
                  <p className="text-sm text-slate-500">Manage user accounts</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">👥</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-right text-2xl font-bold text-indigo-600">1,245</div>
                <p className="text-slate-500">Total Users</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-indigo-600">Courses</h3>
                  <p className="text-sm text-slate-500">Manage course content</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">📚</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-right text-2xl font-bold text-indigo-600">89</div>
                <p className="text-slate-500">Total Courses</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-indigo-600">Revenue</h3>
                  <p className="text-sm text-slate-500">Monthly earnings</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">💰</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-right text-2xl font-bold text-indigo-600">$12,450</div>
                <p className="text-slate-500">Monthly Revenue</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600">👤</span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">New user registered: john.doe@example.com</h3>
                  <p className="text-sm text-slate-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600">📚</span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">Course published: JavaScript Advanced</h3>
                  <p className="text-sm text-slate-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600">✅</span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">Quiz completed: React Fundamentals</h3>
                  <p className="text-sm text-slate-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}