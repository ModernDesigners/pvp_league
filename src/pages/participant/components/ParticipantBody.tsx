import EventCard from "../../home/components/futureEvents/card/EventCard";

export default function ParticipantBody(props: {
  roundsDiv: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={props.roundsDiv} className="MyContainer">
      <h2 className="text-desc-h text-2xl tracking-wider">წინა ბეთლები</h2>

      <div className="flex flex-col gap-5 py-5">
        <EventCard
          battleDate="22 აპრილი"
          currentArtist="PELE"
          enemyArtist="NIKKI SLOW"
          win={true}
          isFutureEvent={false}
          isTransparentBg
        />
        <EventCard
          battleDate="12 აპრილი"
          currentArtist="PELE"
          enemyArtist="GROTASK"
          win={false}
          isFutureEvent={false}
          isTransparentBg
        />
        <EventCard
          battleDate="22 აპრილი"
          currentArtist="PELE"
          enemyArtist="GROTASK"
          win={false}
          isFutureEvent={false}
          isTransparentBg
        />
      </div>
    </div>
  );
}
