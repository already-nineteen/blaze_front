import { Link } from "react-router-dom";

const ScoreSection = ({ score, totalQuestions }) => {
  // 점수에 따른 문구를 결정하는 JSX를 반환하는 함수
  const renderMessage = () => {
    if (score === totalQuestions) {
      return <>대단해요!<br />소방 안전 지식을 잘 알고 있는 것 같아요.</>;
    } else if (score === totalQuestions - 1) {
      return <>아까워요!<br />그래도 소방 안전 지식을 꽤 알고 있는 것 같아요.</>;
    } else if (score >= totalQuestions / 2) {
      return <>잘했어요!<br />소방 안전에 대해 더 공부하면 좋을 것 같아요.</>;
    } else {
      return <>노력이 필요해요!<br />소방 안전 지식을 더 많이 알아두면 도움이 될 거예요.</>;
    }
  };

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
          {renderMessage()}
        </p>
        <div className="flex justify-end w-96">
          <Link to={"/"}>
            <button className="text-base mt-4 text-gray-300 bg-gray-100 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg transition duration-200 ease">
              처음으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreSection;
