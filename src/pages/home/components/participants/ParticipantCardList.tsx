import React from "react";
import ParticipantCard from "./ParticipantCard";
import pele from "/assets/characters/pele.png";
import nikki from "/assets/characters/nikki.png";
import bxnny from "/assets/characters/bxnny.png";

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
