import React from "react";
import ArtistImages from "./ArtistImages";
import BattleInfo from "./BattleInfo";
import EventButtons from "./EventButtons";

const EventCard: React.FC = () => {
  return (
    <div className="h-[175px] bg-var-card rounded-md flex justify-between overflow-hidden ">
      <div className="w-[50%] h-full flex">
        <ArtistImages />
        <BattleInfo />
      </div>

      <EventButtons />
    </div>
  );
};

export default EventCard;
