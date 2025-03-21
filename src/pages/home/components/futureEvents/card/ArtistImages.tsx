import React from "react";
import pele from "/assets/participants/pele.png";
import nikki from "/assets/participants/nikki.png";
import { IArtistsPrevBattlesWinner } from "../../../../../interfaces/artist-profile-prevbattles-interface";
import { useParticipantPage } from "../../../../../hooks/useParticipantPage";

const ArtistImages: React.FC<IArtistsPrevBattlesWinner> = ({
  win,
  isFutureEvent,
}) => {
  const goToProfile = useParticipantPage();
  const handleGoToPofile = () => {
    if (!isFutureEvent) return;
    goToProfile("/participant/pele");
  };
  return (
    <div
      className={`w-[50%] max-w-[450px] h-full flex items-center justify-evenly  card-images border-b-2 border-b-main ${
        isFutureEvent && "cursor-pointer"
      }`}
      onClick={() => handleGoToPofile()}
    >
      <div className="w-full h-full flex justify-center relative ">
        <img
          src={pele}
          alt="Pele"
          className="h-auto max-h-[80%] max-w-[80%] mt-auto  "
        />
        {!isFutureEvent && win && (
          <div className="bg-var-red absolute bottom-0  w-[100px] h-6 left-[50%] transform -translate-x-1/2">
            <h1 className="text-var-white text-center">WIN</h1>
          </div>
        )}
      </div>
      <div className="w-full h-full flex justify-center relative ">
        <img
          src={nikki}
          alt="Pele"
          className="h-auto max-h-[80%] max-w-[80%]  mt-auto  "
        />
        {!isFutureEvent && !win && (
          <div className="bg-var-red absolute bottom-0  w-[100px] h-6 left-[50%] transform -translate-x-1/2">
            <h1 className="text-var-white text-center">WIN</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistImages;
