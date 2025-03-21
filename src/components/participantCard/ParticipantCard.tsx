import React from "react";
import ParticipantImage, { IParticipantImg } from "./ParticipantImage";
import { IParticipantRecord } from "../../interfaces/participant-info-record";
import ParticipantInfo from "./ParticipantInfo";

const ParticipantCard: React.FC<
  IParticipantImg & IParticipantRecord & { name: string }
> = ({ image, name, win, loose, totalBattles, championsList, belts }) => {
  return (
    <div className="py-6 w-[300px] bg-[#ffffff0a]  flex flex-col transition-transform cursor-pointer duration-500 hover:-translate-y-2  hover:shadow-main-clear will-change-transform relative z-10 overflow-hidden backface-hidden">
      <ParticipantImage championsList={championsList} image={image} />
      <div className=" h-full flex flex-col gap-2 ">
        <div
          className={`flex items-center  myContainer  ${
            championsList ? "h-20" : "h-15"
          }  ${championsList ? "justify-between" : "justify-center"}`}
        >
          <p className=" text-head font-bruno tracking-wider uppercase">
            {name}
          </p>
          {championsList && (
            <p className=" px-3 text-md py-[2px]  bg-yellow-clear text-var-yellow text-center rounded-md font-tkt-regular">
              ქამარი: {belts}
            </p>
          )}
        </div>

        <ParticipantInfo loose={loose} totalBattles={totalBattles} win={win} />
      </div>
    </div>
  );
};

export default ParticipantCard;
