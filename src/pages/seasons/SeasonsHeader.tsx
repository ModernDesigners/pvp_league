import React from "react";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router";
interface ISeasonHeader {
  setCurrentSeason: Function;
  season: number | undefined;
}
const SeasonsHeader: React.FC<ISeasonHeader> = ({
  season,
  setCurrentSeason,
}) => {
  const navigate = useNavigate();
  const nextSeason = () => {
    console.log(season);

    if (season && season < 6) {
      navigate(`/seasons/${season + 1}`);
    }
  };
  const prevSeason = () => {
    if (season && season !== 1) {
      navigate(`/seasons/${season - 1}`);
    }
  };
  return (
    <div className="flex justify-between relative">
      <h1 className="text-6xl relative font-bruno text-var-white">
        <span className="text-var-red">Se</span>ason {season}
      </h1>
      <div className="flex items-center gap-4 ">
        <MyButton
          color="var-red"
          title="Previous Season"
          click={() => prevSeason()}
        />
        <MyButton
          color="var-red"
          title="Next Season"
          click={() => nextSeason()}
        />
      </div>
    </div>
  );
};

export default SeasonsHeader;
