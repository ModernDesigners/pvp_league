import React from "react";
import ParticipantCard from "../../../components/participantCard/ParticipantCard";
import HeaderText from "../../../components/HeaderText";
import pele from "/assets/participants/pele.png";
import nikki from "/assets/participants/nikki.png";
import bxnny from "/assets/participants/bxnny.png";
const PvpSlam: React.FC = () => {
  return (
    <div className="py-4">
      <HeaderText whiteText="PvP Slam" />
      <div className="flex justify-center gap-10 flex-wrap">
        <ParticipantCard
          image={pele}
          loose="4"
          name="Pele"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />
        <ParticipantCard
          image={nikki}
          loose="4"
          name="Pele"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />
        <ParticipantCard
          image={bxnny}
          loose="4"
          name="Pele"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />
        <ParticipantCard
          image={nikki}
          loose="4"
          name="Pele"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />
      </div>
    </div>
  );
};

export default PvpSlam;
