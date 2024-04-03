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
      <div className="box-border pt-20 px-4 min-h-screen flex flex-col items-center justify-center">
        {showScore ? (
          <div className="score-section text-lg font-semibold">
            당신의 점수는 <span className="text-green-500">{score}</span>점
            입니다!
          </div>
        ) : (
          <>
            <div className="question-section mb-4">
              <div className="question-count mb-2">
                <span className="text-xl font-bold">
                  문제 {currentQuestion + 1}
                </span>
                /{quizData.length}
              </div>
              <div className="question-text text-lg font-medium">
                {quizData[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section grid grid-cols-2 gap-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() =>
                    handleAnswerOptionClick(
                      option === quizData[currentQuestion].answer
                    )
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
