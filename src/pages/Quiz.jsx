import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import QuizIntro from "../components/Quiz/QuizIntro";
import quizData from "../mocks/quizData.json";
import ScoreSection from "../components/Quiz/ScoreSection";
import QuestionSection from "../components/Quiz/QuestionSection";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(quizData[0].options.length).fill(false)
  );

  const handleAnswerOptionClick = () => {
    const correctAnswer = quizData[currentQuestion].answer;
    const selectedOptionIndex = checkedState.findIndex(
      (state) => state === true
    );
    if (selectedOptionIndex !== -1) {
      const isCorrect =
        quizData[currentQuestion].options[selectedOptionIndex] ===
        correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
    }

    setShowAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setCheckedState(
        new Array(quizData[nextQuestion].options.length).fill(false)
      );
    } else {
      setShowScore(true);
    }
  };

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : false
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Layout>
      <div className="h-full flex flex-col items-center text-gray-800">
        {!quizStarted ? (
          <QuizIntro onStart={() => setQuizStarted(true)} />
        ) : showScore ? (
          <ScoreSection score={score} totalQuestions={quizData.length} />
        ) : (
          <QuestionSection
            currentQuestion={currentQuestion}
            quizData={quizData}
            checkedState={checkedState}
            handleCheckboxChange={handleCheckboxChange}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            setCurrentQuestion={setCurrentQuestion}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
