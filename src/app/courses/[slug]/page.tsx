"use client";

import Link from "next/link";
import { useState } from "react";

export default function CourseDetail() {
  // In a real app, we would fetch course data from the database based on route params
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  
  const lessons = [
    { id: 1, title: "Introduction to JavaScript", duration: "12:30", type: "video" },
    { id: 2, title: "Variables and Data Types", duration: "18:45", type: "video" },
    { id: 3, title: "Functions and Scope", duration: "22:10", type: "video" },
    { id: 4, title: "Objects and Arrays", duration: "15:20", type: "video" },
    { id: 5, title: "ES6+ Features", duration: "25:40", type: "video" },
    { id: 6, title: "DOM Manipulation", duration: "20:15", type: "video" },
    { id: 7, title: "Events and Event Handling", duration: "18:30", type: "video" },
    { id: 8, title: "Async JavaScript", duration: "28:50", type: "video" },
    { id: 9, title: "Final Project Planning", duration: "10:00", type: "text" },
    { id: 10, title: "Course Quiz", duration: "15:00", type: "quiz" },
  ];
  
  const handleCompleteLesson = (lessonId: number) => {
    // In a real app, we would update the database
    setCurrentLesson(prev => Math.max(prev, lessonId));
    if (lessonId === lessons.length) {
      setIsEnrolled(false); // Reset for demo
      alert("Congratulations! You've completed the course!");
    } else {
      alert(`Lesson "${lessons[lessonId-1].title}" marked as complete!`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 bg-indigo-100 rounded flex items-center justify-center">
          <span className="text-indigo-600 text-2xl">📚</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">JavaScript Fundamentals</h1>
          <p className="text-slate-600">Master the basics of modern JavaScript</p>
          <div className="flex mt-2 space-x-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Free</span>
            <span className="text-sm">Beginner • 10 lessons</span>
            <span className="text-sm">⭐ 4.8 (1.2k ratings)</span>
          </div>
        </div>
      </div>
      
      {/* Course Info Tabs */}
      <div className="border-b border-slate-200 pb-2">
        <div className="flex border-b-2">
          <button
            onClick={() => {}}
            className="px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-indigo-300 hover:text-indigo-600"
          >
            Overview
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 text-sm font-medium border-b-2 border-indigo-500 text-indigo-600"
          >
            Lessons
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-indigo-300 hover:text-indigo-600"
          >
            Reviews
          </button>
        </div>
      </div>
      
      {/* Lessons Tab Content */}
      <section>
        <div className="space-y-4">
           <p className="text-slate-600">
             This comprehensive course covers everything you need to know to start building applications with JavaScript. 
             From basic syntax to advanced concepts, you&apos;ll gain hands-on experience through practical examples and projects.
           </p>
          
          {/* What You'll Learn */}
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">✓</span> What You&apos;ll Learn
              </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>JavaScript fundamentals and syntax</li>
              <li>Working with data types, variables, and operators</li>
              <li>Control flow and loops</li>
              <li>Functions, scope, and closures</li>
              <li>Objects, arrays, and manipulation methods</li>
              <li>Modern ES6+ features (arrow functions, destructuring, modules)</li>
              <li>DOM manipulation and event handling</li>
              <li>Asynchronous JavaScript (promises, async/await)</li>
              <li>Error handling and debugging techniques</li>
              <li>Building a final project from scratch</li>
            </ul>
          </div>
          
          {/* Lessons List */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-4">Course Lessons</h2>
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center">
                  {currentLesson >= lesson.id ? (
                    <span className="text-indigo-600">✓</span>
                  ) : lesson.type === "quiz" ? (
                    <span className="text-indigo-600">❓</span>
                  ) : (
                    <span className="text-indigo-600">▶️</span>
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{lesson.title}</h3>
                    <span className="text-sm text-slate-500">{lesson.duration}</span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-1">
                    {lesson.type === "video" 
                      ? "Video lesson" 
                      : lesson.type === "text"
                        ? "Reading material"
                        : "Interactive quiz"}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-2">
                  {!isEnrolled && currentLesson < lesson.id ? (
                    <button
                      onClick={() => {
                        // In a real app, we would handle enrollment
                        setIsEnrolled(true);
                        alert("You've been enrolled in the course!");
                      }}
                      className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 transition-colors"
                    >
                      Enroll
                    </button>
                  ) : (
                    <>
                      {currentLesson >= lesson.id ? (
                        <span className="text-xs text-indigo-600">Completed</span>
                      ) : (
                        <button
                          onClick={() => handleCompleteLesson(lesson.id)}
                          className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 transition-colors"
                          disabled={currentLesson < lesson.id && !isEnrolled}
                        >
                          Start
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <h3 className="font-medium mb-2">Course Progress</h3>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${(currentLesson / lessons.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-500 mt-1 text-right">
              {currentLesson}/{lessons.length} lessons completed
            </p>
          </div>
          
          {/* Course Actions */}
          <div className="mt-8 flex space-x-3">
            <button
              className="flex-1 px-4 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50 text-sm font-medium"
            >
              Share Course
            </button>
            <Link
              href="/courses/javascript-fundamentals/learn"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium"
            >
              {isEnrolled ? "Continue Learning" : "Enroll Now"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}