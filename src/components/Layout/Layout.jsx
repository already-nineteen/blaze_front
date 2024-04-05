import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-shrink-0" />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default Layout;
