import React from "react";
import { IParticipantInfoText } from "../../../../interfaces/participant-info-text-interface";

const ParticipantInfoText: React.FC<IParticipantInfoText> = ({
  title,
  amount,
  color,
}) => {
  return (
    <div>
      <p className="text-var-gray F_tkt_regular text-lg">{title}</p>
      <p className={`text-${color}`}>{amount}</p>
    </div>
  );
};

export default ParticipantInfoText;
