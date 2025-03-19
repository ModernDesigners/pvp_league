import React from "react";
import ParticipantImage, { IParticipantImg } from "./ParticipantImage";
import ParticipantInfo from "./ParticipantInfo";
import { IParticipantRecord } from "../../../../interfaces/participant-info-record";

const ParticipantCard: React.FC<IParticipantImg & IParticipantRecord> = ({
  image,
  win,
  loose,
  totalBattles,
}) => {
  return (
    <div className="h-[300px] w-[24%] bg-var-card  flex flex-col  ">
      <ParticipantImage image={image} />
      <div className=" h-full flex flex-col justify-center">
        <ParticipantInfo loose={loose} totalBattles={totalBattles} win={win} />
      </div>
    </div>
  );
};

export default ParticipantCard;
