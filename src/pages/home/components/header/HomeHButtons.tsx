import React from "react";
import HomeHButton from "./HomeHButton";

const HomeHButtons: React.FC = () => {
  return (
    <div className="flex gap-10 F_tkt_regular">
      <HomeHButton bgColor="var-red" color="var-white" title="ივენთები" />
      <HomeHButton bgColor="transparent" color="var-red" title="მონაწილეები" />
    </div>
  );
};

export default HomeHButtons;
