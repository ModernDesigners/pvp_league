import React from "react";
import { ISeasonInfo, SeasonsAPI } from "../../../../API/SeasonsAPI";
import SeasonCard from "./SeasonCard";

const PvpFlowList: React.FC = () => {
  return (
    <div className="flex flex-col  items-center gap-5">
      <h1 className="py-5 text-2xl">PvP Flow</h1>
      {SeasonsAPI.pvp_flow.map((season: ISeasonInfo) => (
        <SeasonCard key={season.id} {...season} />
      ))}
    </div>
  );
};

export default PvpFlowList;
