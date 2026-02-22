import React from "react";
import Ad from "../components/shared/Ad";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <Ad />
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
