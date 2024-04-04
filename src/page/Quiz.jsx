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
      <div className="box-border pt-20 px-4 min-h-screen">
        {showScore ? (
          <div className="score-section">
            당신의 점수는 {score}점 입니다! 총 {quizData.length}문제 중.
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>문제 {currentQuestion + 1}</span>/{quizData.length}
              </div>
              <div className="question-text">
                {quizData[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {quizData[currentQuestion].options.map((option) => (
                <button
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
