import { useRef } from "react";
import ParticipantBody from "./components/ParticipantBody";
import ParticipantHeader from "./components/ParticipantHeader";

const Participant: React.FC = () => {
  const roundsDiv = useRef<HTMLDivElement>(null);

  return (
    <div className=" myContainer">
      <ParticipantHeader roundsDiv={roundsDiv} />
      <ParticipantBody roundsDiv={roundsDiv} />
    </div>
  );
};

export default Participant;
