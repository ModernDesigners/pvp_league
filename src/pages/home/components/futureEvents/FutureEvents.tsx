import React from "react";

import EventCardList from "./card/EventCardList";
import HeaderText from "../../../../components/HeaderText";

const FutureEvents: React.FC = () => {
  return (
    <div className="myContainer py-12">
      <HeaderText whiteText="ღონისძიებები" redText="მომავალი" />
      <EventCardList />
    </div>
  );
};

export default FutureEvents;
