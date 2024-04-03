import React from "react";
import Layout from "../components/Layout/Layout";
const Main = () => {
  return (
    <Layout>
      <div className="flex h-[90.8vh] flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">환영합니다!</h1>
          <p>
            FILL은 소방관들의 안전을 위한 서비스입니다. 심박 센서, 가스 센서,
            충격 감지 센서, 온도 센서가 포함된 소방관의 무선 생명줄입니다.
            unity에서 블루투스 통신을 통해 센서 정보들이 전달됩니다.
          </p>
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/chat">화재 정보에 대해 묻기</a>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <a href="/quiz">소방 관련 퀴즈 풀어보기</a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
