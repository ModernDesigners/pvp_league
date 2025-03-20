import React from "react";
import HeaderText from "../../../../components/HeaderText";
import ParticipantCardList from "./ParticipantCardList";
import MyButton from "../../../../components/MyButton";

const Participants: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-transparent to-main-clear">
      <div className="myContainer pb-10">
        <HeaderText whiteText="მონაწილეები" />
        <ParticipantCardList />
        <div className="mt-5 flex justify-center">
          <MyButton color="head" title="მეტის ნახვა" />
        </div>
      </div>
    </div>
  );
};

export default Participants;
