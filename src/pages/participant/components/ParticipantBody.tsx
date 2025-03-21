import EventCard from "../../home/components/futureEvents/card/EventCard";

export default function ParticipantBody(props: {
  roundsDiv: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={props.roundsDiv} className="MyContainer">
      <h2 className="text-desc-h text-2xl tracking-wider">რაუნდები</h2>

      <div className="flex flex-col gap-5 py-5">
        <EventCard active />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
