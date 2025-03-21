import React from "react";
import AcapellaList from "./components/AcapellaList";
import PvpFlowList from "./components/PvpFlowList";
import PvpSlam from "./components/PvpSlam";

const ChampionsPage: React.FC = () => {
  return (
    <div className="py-40 myContainer">
      <h1 className="text-var-white font-bruno text-7xl">
        <span className="text-var-red">CH</span>AMPIONS
      </h1>
      <AcapellaList />
      <PvpFlowList />
      <PvpSlam />
    </div>
  );
};

export default ChampionsPage;
