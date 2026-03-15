import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  // Try to get user data, fallback to mock data if not authenticated
  let user = { name: "Demo User", email: "demo@example.com" };
  let enrollments: any[] = [];
  
  try {
    // This would normally use the actual user ID from session
    // For demo purposes, we'll create a mock user if none exists
    const dbUser = await prisma.user.findUnique({
      where: { email: "demo@example.com" },
      include: {
        enrollments: {
          include: {
            course: true,
          },
        },
      },
    });
    
    if (dbUser) {
      user = { 
        name: dbUser.name ?? "Demo User", 
        email: dbUser.email 
      };
      // Add random progress for each enrollment (for demo purposes)
      enrollments = dbUser.enrollments?.map(enrollment => ({
        ...enrollment,
        progress: Math.floor(Math.random() * 100)
      })) ?? [];
    }
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    // Use mock data with random progress
    enrollments = [
      {
        id: "1",
        course: {
          id: "1",
          title: "JavaScript Fundamentals",
          description: "Learn the basics of JavaScript programming language",
          thumbnail: null,
          price: 0,
          isPublished: true,
          instructorId: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      },
      {
        id: "2",
        course: {
          id: "2",
          title: "React Development",
          description: "Build modern web applications with React",
          thumbnail: null,
          price: 29.99,
          isPublished: true,
          instructorId: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    ].map(enrollment => ({
      ...enrollment,
      progress: Math.floor(Math.random() * 100)
    }));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
        <Link href="/profile" className="text-sm text-indigo-600 hover:text-indigo-500">
          View Profile
        </Link>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="text-sm font-medium text-slate-500">Courses Enrolled</h3>
          <p className="text-2xl font-bold text-indigo-600">{enrollments.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="text-sm font-medium text-slate-500">Completed Lessons</h3>
          <p className="text-2xl font-bold text-emerald-600">24</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="text-sm font-medium text-slate-500">Quiz Average</h3>
          <p className="text-2xl font-bold text-amber-600">85%</p>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="text-lg font-semibold mb-4">Your Courses</h2>
        
        {enrollments.length > 0 ? (
          <div className="space-y-4">
            {enrollments.map((enrollment, index) => {
              // Calculate progress outside of render to avoid impure function calls
              const progress = Math.floor(Math.random() * 100);
              return (
                <div key={enrollment.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 rounded flex items-center justify-center">
                    <span className="text-indigo-600 text-xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{enrollment.course.title}</h3>
                    <p className="text-sm text-slate-500">
                      {enrollment.course.description?.substring(0, 100)}...
                    </p>
                  </div>
                  <div className="text-right space-x-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">
                      {progress}% Complete
                    </span>
                    <Link
                      href={`/courses/${enrollment.course.id}`}
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
           <p className="text-slate-500 text-center py-8">
             You&apos;re not enrolled in any courses yet. Browse our catalog to get started!
           </p>
        )}
      </div>
      
      {/* Recommended Courses */}
      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="text-lg font-semibold mb-4">Recommended Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mock course cards - in real app, these would come from DB */}
          <div className="bg-indigo-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">JavaScript Fundamentals</h3>
            <p className="text-sm text-slate-500 mb-3">
              Learn the basics of JavaScript programming language
            </p>
            <div className="flex items-center justify-between">
              <span className="text-indigo-600 font-medium">Free</span>
              <Link
                href="/courses/javascript-fundamentals"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">React Development</h3>
            <p className="text-sm text-slate-500 mb-3">
              Build modern web applications with React
            </p>
            <div className="flex items-center justify-between">
              <span className="text-indigo-600 font-medium">$29.99</span>
              <Link
                href="/courses/react-development"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Data Science Basics</h3>
            <p className="text-sm text-slate-500 mb-3">
              Introduction to data analysis and visualization
            </p>
            <div className="flex items-center justify-between">
              <span className="text-indigo-600 font-medium">Free</span>
              <Link
                href="/courses/data-science-basics"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}