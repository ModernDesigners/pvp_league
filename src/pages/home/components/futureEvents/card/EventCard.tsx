import React from "react";
import ArtistImages from "./ArtistImages";
import BattleInfo from "./BattleInfo";
import EventButtons from "./EventButtons";

function EventCard(props: { active?: boolean }) {
  return (
    <div
      className={`h-[175px] ${
        props.active
          ? "bg-main-clear hover:bg-main-clear-hover"
          : "bg-var-card hover:bg-var-card-hover"
      } rounded-md flex justify-between overflow-hidden transition-colors duration-300  `}
    >
      <div className="w-[70%] h-full flex">
        <ArtistImages />
        <BattleInfo active={props.active} />
      </div>

      <EventButtons />
    </div>
  );
}

export default EventCard;
