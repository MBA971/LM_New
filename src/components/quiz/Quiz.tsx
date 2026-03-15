"use client";

import { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = optionIndex;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      questions.forEach((q, index) => {
        if (answers[index] === q.correctAnswer) {
          correctCount++;
        }
      });
      setScore(Math.round((correctCount / questions.length) * 100));
      setIsSubmitted(true);
      onComplete(score);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsSubmitted(false);
    setScore(0);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Quiz Complete!
        </h2>
        <p className="text-xl font-semibold mb-6">
          Your score: {score}%
        </p>
        {score >= 80 ? (
          <p className="text-green-600">
            Congratulations! You passed the quiz.
          </p>
        ) : (
          <p className="text-red-600">
            You need to score at least 80% to pass. Please try again.
          </p>
        )}
        <button
          onClick={handleReset}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="text-slate-700 mb-6">{currentQuestion.text}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="flex items-start space-x-3">
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={index}
                checked={answers[currentQuestionIndex] === index}
                onChange={() => handleAnswer(index)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <div className="flex-1 space-y-1">
                <span className="text-slate-700">{option}</span>
                {answers[currentQuestionIndex] === index && !isSubmitted && (
                  <span className="text-xs text-indigo-600 ml-2">Selected</span>
                )}
              </div>
            </label>
          ))}
        </div>
        <div className="flex justify-between">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
              className="px-4 py-2 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={answers[currentQuestionIndex] === undefined}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {currentQuestionIndex === questions.length - 1 ? "Submit Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}