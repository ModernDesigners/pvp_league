import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SeasonsBackground from "./SeasonsBackground";
import Final from "./Final";
import QuarterFinal from "./QuarterFinal";
import Qualify from "./Qualify";
import SeasonsHeader from "./SeasonsHeader";
const Seasons: React.FC = () => {
  const { season } = useParams();
  const [currentSeason, setCurrentSeason] = useState<number>();
  useEffect(() => {
    setCurrentSeason(Number(season));
  }, [season]);

  return (
    <div className="py-40 myContainer ">
      <SeasonsBackground />
      <SeasonsHeader season={currentSeason} />
      <Final />
      <QuarterFinal />
      <Qualify />
    </div>
  );
};

export default Seasons;
