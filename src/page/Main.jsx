import React from "react";
import Layout from "../components/Layout/Layout";
const Main = () => {
  return (
    <Layout>
      <div className="h-full bg-gray-100">
        <div className="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/chat">챗봇</a>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <a href="/quiz">퀴즈</a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
