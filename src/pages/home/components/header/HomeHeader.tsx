import React from "react";
import HomeHContent from "./HomeHContent";
import HomeHeaderBg from "./HomeHeaderBg";
import { ArrowDownIcon } from "../../../../icons/myIcons";

const HomeHeader: React.FC = () => {
  return (
    <div className="h-screen min-h-[800px] flex  items-center myContainer ">
      <HomeHeaderBg />
      <HomeHContent />
      <ArrowDownIcon className="absolute bottom-5 left-2/4 -translate-2/4 animate-bounce" />
    </div>
  );
};

export default HomeHeader;
