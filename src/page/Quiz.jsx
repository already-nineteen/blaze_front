import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import quizData from "../mocks/quizData.json";
import CopyToClipboard from "react-copy-to-clipboard";

const link = "히히 구라지롱";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(quizData[currentQuestion].options.length).fill(false)
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

    setCheckedState(
      new Array(quizData[currentQuestion].options.length).fill(false)
    );
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
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex space-x-8 mb-24 h-24">
              <span
                className="flex items-center text-3xl font-semibold px-10"
                style={{
                  border: "5px solid transparent",
                  backgroundImage:
                    "linear-gradient(#fff, #fff), linear-gradient(to bottom ,#FFFBD6 , #FFE606)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  borderRadius: "30px 30px 30px 0px",
                  color: "#FFE606",
                }}
              >
                QUIZ!
              </span>
              <div className="flex flex-col mb-8 h-full">
                <span className="text-lg text-gray-200 font-semibold">
                  #화재_시_대처법 #소화기_사용법 #돌발_상황
                </span>
                <span className="text-2xl font-semibold">
                  <p>일상에서 꼭 필요한 소방 안전 지식!</p>
                  <p>얼마나 알고 있는지 퀴즈를 풀어 봐요.</p>
                </span>
              </div>
            </div>
            <button
              className="hover:bg-gray-700 text-white font-bold text-lg py-2 px-4 rounded-lg w-full"
              onClick={() => setQuizStarted(true)}
              style={{ background: "#FFE606" }}
            >
              퀴즈 풀러가기
            </button>
          </div>
        ) : showScore ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="score-section text-lg font-semibold">
              점수는요..
              <p className="text-7xl">
                <span className="text-green-500">{score}</span>점
              </p>
            </div>
            <CopyToClipboard
              text={link}
              onCopy={() => alert("링크가 클립보드에 복사되었습니다!")}
            >
              <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                공유하기
              </button>
            </CopyToClipboard>
          </div>
        ) : (
          <div className="question-section pt-40 px-4 mb-8 w-96 flex flex-col gap-8">
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
                <div key={index} className="flex items-center my-2">
                  <input
                    type="checkbox"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none"
                    checked={checkedState}
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
            {showAnswer && (
              <div className="text-green-500 font-bold">
                정답: {quizData[currentQuestion].answer}
              </div>
            )}
            <div className="flex justify-between">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded  hover:bg-blue-700 disabled:opacity-50"
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
                onClick={() => handleAnswerOptionClick()}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                다음
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
