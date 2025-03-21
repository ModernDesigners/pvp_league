import React from "react";
import clsx from "clsx";
import { IParticipantInfoText } from "../../interfaces/participant-info-text-interface";

const ParticipantInfoText: React.FC<IParticipantInfoText> = ({
  title,
  amount,
  large,
}) => {
  switch (title) {
  }
  return (
    <div>
      <p className={`text-desc F_tkt_regular ${large ? "text-lg" : "text-sm"}`}>
        {title}
      </p>
      <p
        className={`mt-1 font-bruno  ${large ? "text-lg" : "text-sm"} ${clsx({
          "text-green-500": title == "მოგება",
          "text-yellow-500": title == "ბეთლი",
          "text-red-500": title == "წაგება",
        })}`}
      >
        {amount}
      </p>
    </div>
  );
};

export default ParticipantInfoText;
