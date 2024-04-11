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
    <div className="question-section flex flex-col justify-center h-full gap-8 w-2/5">
      <div className="question-count mb-2 text-md text-gray-300 w-full flex justify-center">
        {currentQuestion + 1} / {quizData.length}
      </div>
      <div className="question-text text-lg font-medium flex gap-2 px-4">
        <div
          className="text-xl text-white rounded-full min-w-10 min-h-10 max-h-10 flex items-center justify-center"
          style={{
            backgroundColor: "#FFE606",
          }}
        >
          Q.
        </div>
        <div className="text-xl mt-1">{quizData[currentQuestion].question}</div>
      </div>
      <div className="answer-section w-full box-border px-16 mb-10">
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index} className="flex items-center my-2">
            <input
              type="checkbox"
              className="form-checkbox appearance-none h-6 w-6 border bg-gray-300 rounded-full"
              checked={checkedState[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <label className="ml-2 text-md font-medium text-gray-300">
              {option}
            </label>
          </div>
        ))}
        {showAnswer && (
          <div className="w-full mt-6">
            정답: {quizData[currentQuestion].answer}
          </div>
        )}
      </div>
      <div className="w-full flex justify-between items-center text-gray-300 ">
        <button
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="flex gap-1 py-2 px-4 rounded hover:bg-gray-100"
        >
          <img src="assets/<-.svg" />
          이전
        </button>
        <button
          onClick={() => setShowAnswer(true)}
          className="py-2 px-4 rounded hover:bg-gray-100"
        >
          정답 보기
        </button>
        <button
          onClick={() => handleAnswerOptionClick(currentQuestion)}
          className="flex gap-1 py-2 px-4 rounded hover:bg-gray-100"
        >
          다음
          <img className="rotate-180" src="assets/<-.svg" />
        </button>
      </div>
    </div>
  );
};

export default QuestionSection;
