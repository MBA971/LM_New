"use client";

import Link from "next/link";
import Quiz from "@/components/quiz/Quiz";

export default function QuizLesson() {
  // In a real app, we would fetch the quiz data from the database
  const quizQuestions = [
    {
      id: 1,
      text: "What is the correct way to declare a JavaScript variable?",
      options: [
        "variable name = value;",
        "var name = value;",
        "let name = value;",
        "Both B and C are correct"
      ],
      correctAnswer: 3
    },
    {
      id: 2,
      text: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Object"],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The global object",
        "The object that called the function",
        "It depends on how the function is called"
      ],
      correctAnswer: 3
    },
    {
      id: 4,
      text: "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0
    },
    {
      id: 5,
      text: "What is the output of 'console.log(typeof []);' in JavaScript?",
      options: ["'array'", "'object'", "'undefined'", "'function'"],
      correctAnswer: 1
    }
  ];

  const handleQuizComplete = (score: number) => {
    alert(`Quiz completed! Your score: ${score}%`);
    // In a real app, we would update the database with the quiz result
    if (score >= 80) {
      alert("Congratulations! You passed the quiz.");
    } else {
      alert("You need to score at least 80% to pass. Please review the material and try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Course Quiz</h1>
        <Link href="/courses/javascript-fundamentals" className="text-indigo-600 hover:text-indigo-500">
          ← Back to Course
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
      </div>
    </div>
  );
}