import React from "react";
import { IParticipantInfoText } from "../../../../interfaces/participant-info-text-interface";
import clsx from "clsx";

const ParticipantInfoText: React.FC<IParticipantInfoText> = ({
  title,
  amount,
}) => {
  switch (title) {
  }
  return (
    <div>
      <p className="text-var-gray F_tkt_regular text-sm">{title}</p>
      <p
        className={`mt-1 font-bruno ${clsx({
          "text-green-500": title == "ბეთლი",
          "text-yellow-500": title == "მოგება",
          "text-red-500": title == "წაგება",
        })}`}
      >
        {amount}
      </p>
    </div>
  );
};

export default ParticipantInfoText;
