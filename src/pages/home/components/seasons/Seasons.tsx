import React from "react";
import HeaderText from "../../../../components/HeaderText";
import SeasonsList from "./SeasonsList";

const Seasons: React.FC = () => {
  return (
    <div className="myContainer py-10">
      <HeaderText whiteText="სეზონები" />
      <SeasonsList />
    </div>
  );
};

export default Seasons;
