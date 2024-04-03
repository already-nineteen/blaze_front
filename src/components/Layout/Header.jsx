import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center space-x-8">
      <div className="logo">
        <a href="/" className="text-xl font-bold">
          <span className="space-x-1">⚠️</span>
          FILL
        </a>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/chat" className="hover:text-gray-300">
              채팅
            </a>
          </li>
          <li>
            <a href="/quiz" className="hover:text-gray-300">
              퀴즈
            </a>
          </li>
          <li>
            <a href="/simulation" className="hover:text-gray-300">
              시뮬레이션
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
