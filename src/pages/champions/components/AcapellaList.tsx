import React from "react";
import HeaderText from "../../../components/HeaderText";
import ParticipantCard from "../../../components/participantCard/ParticipantCard";
import pele from "/assets/characters/pele.png";
import nikki from "/assets/characters/nikki.png";
import bxnny from "/assets/characters/bxnny.png";

const AcapellaList: React.FC = () => {
  return (
    <div className="py-4">
      <HeaderText whiteText="Acapella" />
      <div className="flex justify-center gap-10">
        <ParticipantCard
          image={pele}
          loose="4"
          name="Pele"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />{" "}
        <ParticipantCard
          image={bxnny}
          loose="4"
          name="Bxnny"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />{" "}
        <ParticipantCard
          image={nikki}
          loose="4"
          name="Nikki"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />{" "}
        <ParticipantCard
          image={pele}
          loose="4"
          name="PELE"
          win="10"
          totalBattles="14"
          championsList
          belts="2"
        />
      </div>
    </div>
  );
};

export default AcapellaList;
