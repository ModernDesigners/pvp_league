import React from "react";
import ParticipantInfoText from "./ParticipantInfoText";
import { IParticipantRecord } from "../../interfaces/participant-info-record";

const ParticipantInfo: React.FC<IParticipantRecord> = ({
  win,
  loose,
  totalBattles,
}) => {
  return (
    <div className="flex justify-between myContainer items-center text-center ">
      <ParticipantInfoText amount={totalBattles} title="ბეთლი" />
      <ParticipantInfoText amount={win} title="მოგება" />
      <ParticipantInfoText amount={loose} title="წაგება" />
    </div>
  );
};

export default ParticipantInfo;
