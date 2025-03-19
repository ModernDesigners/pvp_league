import React from "react";
import HeaderText from "../../../../components/HeaderText";
import ParticipantCardList from "./ParticipantCardList";

const Participants: React.FC = () => {
  return (
    <div className="myContainer py-10">
      <HeaderText whiteText="მონაწილეები" />
      <ParticipantCardList />
    </div>
  );
};

export default Participants;
