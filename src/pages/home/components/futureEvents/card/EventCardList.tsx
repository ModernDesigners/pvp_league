import React from "react";
import EventCard from "./EventCard";

const EventCardList = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventCardList;
