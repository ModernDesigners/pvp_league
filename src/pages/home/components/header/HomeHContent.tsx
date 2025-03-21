import React from "react";
import HomeHLogo from "./HomeHLogo";
import HomeHButtons from "./HomeHButtons";

const HomeHContent: React.FC = () => {
  return (
    <div className="relative w-[500px] flex flex-col gap-6 ">
      <HomeHLogo />
      <p className="text-var-gray text-lg F_tkt_regular">
        გაიგე სიახლეები FlowFlow Magazine - ის შესახებ და ადევნე თვალყური
        მონაწილეებს
      </p>
      <HomeHButtons />
    </div>
  );
};

export default HomeHContent;
