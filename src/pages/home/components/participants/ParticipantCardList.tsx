import React from "react";
import ParticipantCard from "./ParticipantCard";
import pele from "/assets/pele.png";
import nikki from "/assets/nikki.png";
import bxnny from "/assets/bxnny.png";

const ParticipantCardList: React.FC = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-[1%] gap-y-3">
      <ParticipantCard image={pele} loose="2" totalBattles="14" win="12" />
      <ParticipantCard image={nikki} loose="2" totalBattles="4" win="2" />
      <ParticipantCard image={bxnny} loose="1" totalBattles="6" win="5" />
      <ParticipantCard image={pele} loose="2" totalBattles="14" win="12" />
      <ParticipantCard image={nikki} loose="2" totalBattles="4" win="2" />
      <ParticipantCard image={bxnny} loose="1" totalBattles="6" win="5" />
      <ParticipantCard image={pele} loose="2" totalBattles="14" win="12" />
      <ParticipantCard image={nikki} loose="2" totalBattles="4" win="2" />
      <ParticipantCard image={bxnny} loose="1" totalBattles="6" win="5" />
    </div>
  );
};

export default ParticipantCardList;
