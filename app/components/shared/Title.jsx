import React from "react";

const Title = ({ children }) => {
  return (
    <h3 className="text-2xl md:text-5xl lg:text-[40px] font-extrabold text-[#1e2330] leading-tight">
      {children}
    </h3>
  );
};

export default Title;
