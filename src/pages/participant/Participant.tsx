import ParticipantBody from "./components/ParticipantBody";
import ParticipantHeader from "./components/ParticipantHeader";

const Participant: React.FC = () => {
  return (
    <div className=" myContainer">
      <ParticipantHeader />
      <ParticipantBody />
    </div>
  );
};

export default Participant;
