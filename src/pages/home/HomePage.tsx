import React from "react";
import HomeHeader from "./components/header/HomeHeader";
import FutureEvents from "./components/futureEvents/FutureEvents";
import Participants from "./components/participants/Participants";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <FutureEvents />
      <Participants />
    </>
  );
};

export default HomePage;
