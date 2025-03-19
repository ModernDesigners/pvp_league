import React from "react";
import HomeHLogo from "./HomeHLogo";
import HomeHDescription from "./HomeHDescription";
import HomeHButtons from "./HomeHButtons";

const HomeHContent: React.FC = () => {
  return (
    <div className="relative w-[500px] flex flex-col gap-6 ">
      <HomeHLogo />
      <HomeHDescription />
      <HomeHButtons />
    </div>
  );
};

export default HomeHContent;
