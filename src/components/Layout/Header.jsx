import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-6 flex items-center space-x-8 border-b-2 border-gray-200 bg-white">
      <div className="logo">
        <a href="/" className="text-xl font-bold space-x-2 ml-6">
          BLAZE
        </a>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/chat" className="hover:text-gray-300">
              💬 채팅
            </a>
          </li>
          <li>
            <a href="/quiz" className="hover:text-gray-300">
              ✏️ 퀴즈
            </a>
          </li>
          <li>
            <a href="/simulation" className="hover:text-gray-300">
              🧯 시뮬레이션
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
