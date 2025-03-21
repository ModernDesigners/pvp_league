import EventCard from "./EventCard";

const EventCardList = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <EventCard
        battleDate="22 მარტი"
        currentArtist="PELE"
        enemyArtist="NIKKI SLOW"
        win={true}
        isFutureEvent={true}
      />
      <EventCard
        battleDate="10 მარტი"
        currentArtist="PELE"
        enemyArtist="BXNNY"
        win={false}
        isFutureEvent={true}
      />
      <EventCard
        battleDate="22 აპრილი"
        currentArtist="PELE"
        enemyArtist="GROTASK"
        win={true}
        isFutureEvent={true}
      />
    </div>
  );
};

export default EventCardList;
