import VideoCard from "../../components/VideoCard";
import { HeartIcon, ViewsIcon } from "../../icons/myIcons";
import { DecorBg } from "../participant/components/ParticipantHeader";
import WatchSide from "./components/WatchSide";
import headerBg from "/assets/images/headerBg.webp";
import backVideo from "/assets/images/backVideo.webp";

export default function Watch() {
  return (
    <div className=" flex pb-20  myContainer pt-40">
      <DecorBg image={headerBg} />
      <div className="relative z-[5] tracking-wider w-full">
        <div className="flex flex-col gap-3">
          <h1 className="font-bruno text-head text-2xl tracking-widest">
            PELE VS NIKKI SLOW
          </h1>
          <h3 className="font-tkt-medium text-desc text-lg tracking-widest">
            17 იან ორშ 14:30
          </h3>
        </div>
        <WatchSide />
        <ActionBar />

        <div className="flex flex-col gap-3 text-head text-lg mt-10">
          <h2>
            <span className="text-main">სხვა</span> ბეთლები
          </h2>
          <div className="flex gap-5">
            <VideoCard
              id={2}
              image={backVideo}
              title={"Pele Vs Nikki Slow"}
              views={20152}
              date={"ორშ 14:30"}
            />
            <VideoCard
              id={2}
              image={backVideo}
              title={"Pele Vs Nikki Slow"}
              views={20152}
              date={"ორშ 14:30"}
            />
            <VideoCard
              id={2}
              image={backVideo}
              title={"Pele Vs Nikki Slow"}
              views={20152}
              date={"ორშ 14:30"}
            />
            <VideoCard
              id={2}
              image={backVideo}
              title={"Pele Vs Nikki Slow"}
              views={20152}
              date={"ორშ 14:30"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionBar() {
  return (
    <div className="flex mt-5 gap-5">
      <div className="flex-[1.5] justify-between items-center flex gap-5">
        <div className="flex items-center gap-3">
          <ViewsIcon />{" "}
          <p className="text-head2 font-tkt-semibold text-sm tracking-widest">
            20 152
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p className="text-head2 font-tkt-semibold text-sm tracking-widest">
              252
            </p>
            <HeartIcon className="[&>path]:fill-main" />
          </div>
          <button className=" w-[150px] h-[40px] text-head2 rounded-md cursor-pointer bg-button-like transition-colors hover:bg-button-like-hover">
            მოწონება
          </button>
        </div>
      </div>
      <div className="flex-1 max-w-[480px]"></div>
    </div>
  );
}
