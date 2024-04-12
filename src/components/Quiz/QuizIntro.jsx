import React from "react";

const QuizIntro = ({ onStart }) => {
  return (
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
        onClick={onStart}
        style={{ background: "#FFE606" }}
      >
        퀴즈 풀러가기
      </button>
    </div>
  );
};

export default QuizIntro;
