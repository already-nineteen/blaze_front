import CopyToClipboard from "react-copy-to-clipboard";

const link = "히히 구라지롱";

const ScoreSection = ({ score, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="score-section text-lg font-semibold">
        점수는요..
        <p className="text-7xl">
          <span className="text-green-500">
            {score}/{totalQuestions}
          </span>
          점
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
  );
};

export default ScoreSection;
