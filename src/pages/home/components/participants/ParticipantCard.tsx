import React from "react";
import ParticipantImage, { IParticipantImg } from "./ParticipantImage";
import ParticipantInfo from "./ParticipantInfo";
import { IParticipantRecord } from "../../../../interfaces/participant-info-record";

const ParticipantCard: React.FC<
  IParticipantImg & IParticipantRecord & { name: string }
> = ({ image, name, win, loose, totalBattles }) => {
  return (
    <div className="py-6 w-[300px] bg-[#ffffff0a]  flex flex-col transition-transform cursor-pointer duration-500 hover:-translate-y-2  hover:shadow-main-clear will-change-transform relative z-10 overflow-hidden backface-hidden">
      <ParticipantImage image={image} />
      <div className=" h-full flex flex-col ">
        <p className="mx-auto mt-4 text-head font-bruno tracking-wider uppercase">
          {name}
        </p>
        <ParticipantInfo loose={loose} totalBattles={totalBattles} win={win} />
      </div>
    </div>
  );
};

export default ParticipantCard;
