import { ISeasonInfo, SeasonsAPI } from "../../../../API/SeasonsAPI";
import SeasonCard from "./SeasonCard";

export default function SeasonsList() {
  return (
    <div className="flex gap-5 flex-wrap">
      {SeasonsAPI.map((season: ISeasonInfo) => (
        <SeasonCard key={season.id} {...season} />
      ))}
    </div>
  );
}
