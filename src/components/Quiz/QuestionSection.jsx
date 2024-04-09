import React from "react";

const QuestionSection = ({
  currentQuestion,
  quizData,
  checkedState,
  handleCheckboxChange,
  showAnswer,
  setCurrentQuestion,
  setShowAnswer,
  handleAnswerOptionClick,
}) => {
  return (
    <div className="question-section pt-40 px-4 mb-8 w-96 flex flex-col gap-8">
      <div className="question-count mb-2">
        <span className="text-xl font-bold">문항 {currentQuestion + 1}</span>/
        {quizData.length}
      </div>
      <div className="question-text text-lg font-medium">
        {quizData[currentQuestion].question}
      </div>
      <div className="answer-section">
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index} className="flex items-center my-2">
            <input
              type="checkbox"
              className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none"
              checked={checkedState[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <label className="ml-2 text-md font-medium">{option}</label>
          </div>
        ))}
      </div>
      {showAnswer && (
        <div className="text-green-500 font-bold">
          정답: {quizData[currentQuestion].answer}
        </div>
      )}
      <div className="flex justify-between">
        <button
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          이전
        </button>
        <button
          onClick={() => setShowAnswer(true)}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
        >
          정답 보기
        </button>
        <button
          onClick={() => handleAnswerOptionClick(currentQuestion)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default QuestionSection;
