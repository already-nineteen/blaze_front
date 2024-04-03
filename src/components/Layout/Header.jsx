import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white p-6 flex items-center space-x-8">
      <div className="logo">
        <a href="/" className="text-xl font-bold space-x-2">
          <span>⚠️</span>
          <span>FILL</span>
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
