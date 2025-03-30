import React from "react";
import pele from "/assets/participants/pele.png";
import nikki from "/assets/participants/nikki.png";
import { IArtistsPrevBattlesWinner } from "../../../../../interfaces/artist-profile-prevbattles-interface";
import { useParticipantPage } from "../../../../../hooks/useParticipantPage";
import WinTitle from "./WinTitle";

const ArtistImages: React.FC<IArtistsPrevBattlesWinner> = ({
  win,
  isFutureEvent,
}) => {
  const goToProfile = useParticipantPage();
  const handleGoToPofile = () => {
    goToProfile("/participant/pele");
  };
  return (
    <div
      className={`w-[50%] max-w-[450px] h-full flex items-center justify-evenly  card-images border-b-2 border-b-main ${"cursor-pointer"}`}
      onClick={() => handleGoToPofile()}
    >
      <div className="w-full h-full flex justify-center relative ">
        <img
          src={pele}
          alt="Pele"
          className="h-auto max-h-[80%] max-w-[80%] mt-auto  "
        />
        {!isFutureEvent && win && <WinTitle />}
      </div>
      <div className="w-full h-full flex justify-center relative ">
        <img
          src={nikki}
          alt="Pele"
          className="h-auto max-h-[80%] max-w-[80%]  mt-auto  "
        />
        {!isFutureEvent && !win && <WinTitle />}
      </div>
    </div>
  );
};

export default ArtistImages;
