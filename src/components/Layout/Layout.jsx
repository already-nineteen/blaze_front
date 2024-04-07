import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-shrink-0" />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
