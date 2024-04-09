import React from "react";

const SimulationIntro = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex mb-12 space-x-16">
        <div className="flex flex-col mb-8 w-80 space-y-8">
          <p className="font-bold text-xl">
            화재가 일어났을 때의 대처 방법을 <br />
            시뮬레이션하며 익혀 봐요.
          </p>
          <button
            onClick={onStart}
            style={{ backgroundColor: "#FFE606" }}
            className="hover:bg-yellow-400 text-white text-base py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            시뮬레이션 하러 가기
          </button>
        </div>
        <div className="flex flex-col mb-8 w-90">
          <h2 className="mb-2 font-bold text-lg">폰으로도 할 수 있어요!</h2>
          <p className="text-base">
            QR코드를 카메라로 인식해 파일을 실행시켜 보세요.
          </p>
          <div className="mt-8 bg-gray-300 w-32 h-32">qrcode쓰</div>
        </div>
      </div>
    </div>
  );
};

export default SimulationIntro;
