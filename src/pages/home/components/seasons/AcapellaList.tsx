import React from "react";
import { ISeasonInfo, SeasonsAPI } from "../../../../API/SeasonsAPI";
import SeasonCard from "./SeasonCard";

const AcapellaList: React.FC = () => {
  return (
    <div className="flex flex-col  items-center gap-5">
      <h1 className="pb-5 pt-9 text-2xl">Acapella</h1>
      {SeasonsAPI.acappela.map((season: ISeasonInfo) => (
        <SeasonCard key={season.id} {...season} />
      ))}
    </div>
  );
};

export default AcapellaList;
