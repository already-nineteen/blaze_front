import { Link } from "react-router-dom";

const ScoreSection = ({ score, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="score-section text-lg font-semibold space-y-16">
        <div className="flex flex-col space-y-4">
          <p>퀴즈 결과, 맞춘 개수는...</p>
          <p className="text-5xl text-green-500" style={{ color: "#FFE606" }}>
            {score}
            <span className="text-4xl text-gray-300">/{totalQuestions}</span>
          </p>
        </div>
        <p className="text-xl">
          대단해요!
          <br />
          소방 안전 지식을 잘 알고 있는 것 같아요.
        </p>
        <div className="flex justify-end w-96">
          <Link to={"/"}>
            <button className="text-base mt-4 text-gray-300 bg-gray-100 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
              처음으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreSection;
