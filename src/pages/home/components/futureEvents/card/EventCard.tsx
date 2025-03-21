import React from "react";
import ArtistImages from "./ArtistImages";
import BattleInfo from "./BattleInfo";
import EventButtons from "./EventButtons";
import { IArtistsPrevBattlesWinner } from "../../../../../interfaces/artist-profile-prevbattles-interface";
import { IPrevBattlesInfo } from "../../../../../interfaces/prev-battles-info-interface";
interface ICardGlobalInterface {
  isTransparentBg: boolean;
}
const EventCard: React.FC<
  IArtistsPrevBattlesWinner & IPrevBattlesInfo & ICardGlobalInterface
> = ({
  battleDate,
  currentArtist,
  enemyArtist,
  win,
  isFutureEvent,
  isTransparentBg,
}) => {
  return (
    <div
      className={`h-[175px] 
      ${!isTransparentBg && "bg-var-card"}
      rounded-md flex justify-between overflow-hidden transition-colors duration-300 mb-4`}
    >
      <div className="w-[70%] h-full flex">
        <ArtistImages win={win} isFutureEvent={isFutureEvent} />
        <BattleInfo
          battleDate={battleDate}
          currentArtist={currentArtist}
          enemyArtist={enemyArtist}
        />
      </div>

      <EventButtons />
    </div>
  );
};

export default EventCard;
