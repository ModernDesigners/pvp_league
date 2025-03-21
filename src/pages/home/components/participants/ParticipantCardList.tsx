import React from "react";
import pele from "/assets/participants/pele.png";
import nikki from "/assets/participants/nikki.png";
import bxnny from "/assets/participants/bxnny.png";
import ParticipantCard from "../../../../components/participantCard/ParticipantCard";

const ParticipantCardList: React.FC = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-[1%] gap-y-3">
      <ParticipantCard
        image={pele}
        name="pele"
        loose="2"
        totalBattles="14"
        win="12"
      />
      <ParticipantCard
        image={nikki}
        name="nikki"
        loose="2"
        totalBattles="4"
        win="2"
      />
      <ParticipantCard
        image={bxnny}
        name="bxnny"
        loose="1"
        totalBattles="6"
        win="5"
      />
      <ParticipantCard
        image={pele}
        name="pele"
        loose="2"
        totalBattles="14"
        win="12"
      />
      <ParticipantCard
        image={nikki}
        name="nikki"
        loose="2"
        totalBattles="4"
        win="2"
      />
      <ParticipantCard
        image={bxnny}
        name="bxnny"
        loose="1"
        totalBattles="6"
        win="5"
      />
      <ParticipantCard
        image={pele}
        name="pele"
        loose="2"
        totalBattles="14"
        win="12"
      />
      <ParticipantCard
        image={nikki}
        name="nikki"
        loose="2"
        totalBattles="4"
        win="2"
      />
      <ParticipantCard
        image={bxnny}
        name="bxnny"
        loose="1"
        totalBattles="6"
        win="5"
      />
      <ParticipantCard
        image={pele}
        name="bxnny"
        loose="2"
        totalBattles="14"
        win="12"
      />
    </div>
  );
};

export default ParticipantCardList;
