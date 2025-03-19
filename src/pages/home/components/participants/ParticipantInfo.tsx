import React from "react";
import ParticipantInfoText from "./ParticipantInfoText";
import { IParticipantRecord } from "../../../../interfaces/participant-info-record";

const ParticipantInfo: React.FC<IParticipantRecord> = ({
  win,
  loose,
  totalBattles,
}) => {
  return (
    <div className="flex justify-around px-10items-center text-center">
      <ParticipantInfoText
        amount={totalBattles}
        color="var-white"
        title="ბეთლი"
      />
      <ParticipantInfoText amount={win} color="var-green" title="მოგება" />
      <ParticipantInfoText amount={loose} color="var-red" title="წაგება" />
    </div>
  );
};

export default ParticipantInfo;
