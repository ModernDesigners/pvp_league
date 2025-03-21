import React from "react";
import { StageInfoText } from "./StageInfoText";
import EventCard from "../home/components/futureEvents/card/EventCard";

const QuarterFinal: React.FC = () => {
  return (
    <div className="relative">
      <div className="pt-20 px-5">
        <StageInfoText title="ნახევარ-ფინალი" isWhiteText />
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <EventCard
          battleDate="12 აპრილი"
          currentArtist="PELE"
          enemyArtist="GROTASK"
          win={false}
          isFutureEvent={false}
          isTransparentBg={false}
        />
        <EventCard
          battleDate="12 აპრილი"
          currentArtist="PELE"
          enemyArtist="GROTASK"
          win={false}
          isFutureEvent={false}
          isTransparentBg={false}
        />
      </div>
    </div>
  );
};

export default QuarterFinal;
