import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

import quizData from "../mocks/quizData.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Layout>
      <div className="pt-40 px-4 min-h-screen flex flex-col items-center bg-gray-100 text-gray-800">
        {showScore ? (
          <div className="score-section text-lg font-semibold">
            당신의 점수는 <span className="text-green-500">{score}</span>점
            입니다!
            <div className="mt-4 text-sm">
              <button
                onClick={() => window.location.reload()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow"
              >
                다시 플레이
              </button>
            </div>
          </div>
        ) : (
          <div className="question-section mb-8 w-96 flex flex-col gap-8">
            <div className="question-count mb-2">
              <span className="text-xl font-bold">
                문항 {currentQuestion + 1}
              </span>
              /{quizData.length}
            </div>
            <div className="question-text text-lg font-medium">
              {quizData[currentQuestion].question}
            </div>
            <div className="answer-section">
              {quizData[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none"
                    onChange={() =>
                      handleAnswerOptionClick(
                        option === quizData[currentQuestion].answer
                      )
                    }
                  />
                  <label className="ml-2 text-md font-medium">{option}</label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
