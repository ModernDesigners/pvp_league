import React from "react";
import HomeHContent from "./HomeHContent";
import HomeHeaderBg from "./HomeHeaderBg";

const HomeHeader: React.FC = () => {
  return (
    <div className="h-[900px] flex  items-center px-32 ">
      <HomeHeaderBg />
      <HomeHContent />
    </div>
  );
};

export default HomeHeader;
