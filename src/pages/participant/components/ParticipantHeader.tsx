import MyButton from "../../../components/MyButton";
import ParticipantInfoText from "../../../components/participantCard/ParticipantInfoText";
import headerBg from "/assets/images/headerBg.webp";
import pele from "/assets/participants/pele.png";

export default function ParticipantHeader(props: {
  roundsDiv: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen min-h-[800px] flex  items-center myContainer ">
      <DecorBg image={headerBg} />
      <div className="MyContainer relative z-[5] w-full">
        <div className="flex items-stretch w-full">
          <Pimage />
          <Pinfo roundsDiv={props.roundsDiv} />
        </div>
      </div>
    </div>
  );
}

function Pimage() {
  return (
    <div className="w-2/4 flex justify-center items-center">
      <div className="relative bg-gradient-to-t from-main-clear flex justify-center to-transparent border-b-2 border-main h-[300px] max-w-[380px] w-full">
        <img
          src={pele}
          alt="pele"
          className="absolute max-w-4/5 max-h-4/4 bottom-0 object-cover "
        />
      </div>
    </div>
  );
}

function Pinfo(props: { roundsDiv: React.RefObject<HTMLDivElement | null> }) {
  const scrollToRounds = () => {
    props.roundsDiv.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col gap-5 max-w-[400px] w-2/4">
      <h1 className="text-head font-bruno uppercase text-2xl md:text-3xl lg:text-4xl tracking-wider">
        Pele / <span className="font-tkt-semibold">პელე</span>
      </h1>
      <div className="mt-auto flex flex-col gap-5 items-start">
        <div className="flex justify-between items-center text-center mt-5  w-full">
          <ParticipantInfoText large amount={"12"} title="ბეთლი" />
          <ParticipantInfoText large amount={"8"} title="მოგება" />
          <ParticipantInfoText large amount={"4"} title="წაგება" />
        </div>
        <MyButton click={scrollToRounds} color="head" title="რაუნდების ნახვა" />
      </div>
    </div>
  );
}

export function DecorBg(props: { image: string }) {
  return (
    <div className=" absolute top-0 left-0 w-full h-full shadow_down select-none">
      <img
        className="w-full h-full object-cover brightness-50 "
        src={props.image}
        alt="Pele Banner"
      />
    </div>
  );
}
