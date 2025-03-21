import React from "react";
import { useParams } from "react-router";
import EventCard from "../home/components/futureEvents/card/EventCard";
import SeasonsBackground from "./SeasonsBackground";
import Final from "./Final";
import QuarterFinal from "./QuarterFinal";
import Qualify from "./Qualify";
const Seasons: React.FC = () => {
  const { season } = useParams();
  return (
    <div className="py-40 myContainer ">
      <SeasonsBackground />
      <h1 className="text-6xl relative font-bruno text-var-white">
        <span className="text-var-red">Se</span>ason {season}
      </h1>
      <Final />
      <QuarterFinal />
      <Qualify />
    </div>
  );
};

export default Seasons;
