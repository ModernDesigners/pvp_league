import { PlayIcon } from "../../../icons/myIcons";
import backVideo from "/assets/images/backVideo.webp";

export default function WatchSide() {
  return (
    <div className="flex w-full max-h-[550px] h-full gap-5 mt-5 items-stretch">
      <WatchVideo />
      <Comments />
    </div>
  );
}

function WatchVideo() {
  return (
    <div className="flex-[1.5]">
      <div className="relative  h-full overflow-hidden aspect-video w-full bg-black rounded-lg flex justify-center items-center cursor-pointer">
        <div className="absolute z-[1] top-0 left-0 w-full h-full bg-[#00000052]"></div>
        <img
          src={backVideo}
          className="absolute top-0 left-0 w-full h-full object-cover "
          alt="pele vs nikki slow"
        />
        <div className="relative z-[3] h-[60px] aspect-square rounded-[50%] bg-[#000000a4] flex justify-center items-center">
          <PlayIcon />
        </div>
      </div>
    </div>
  );
}
function Comments() {
  return (
    <div className="flex flex-col max-w-[480px] flex-1 h-full w-full rounded-lg bg-comments-bg border-2 border-comments-border">
      <div className=" flex flex-col gap-3 py-3 px-4 border-b-2 border-comments-border">
        <h3 className="font-tkt-medium text-head2 text-md tracking-wider">
          კომენტარები
        </h3>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className=" bottom-0 mt-auto flex gap-3 py-3 px-4 border-t-2 border-comments-border">
        <p className="px-3 font-tkt-medium text-head2 text-sm text-center tracking-wider">
          კომენტარის დასაწერად გაიარეთ{" "}
          <span className="text-main cursor-pointer">ავტორიაზაცია</span>
        </p>
      </div>
    </div>
  );
}
function Comment() {
  return (
    <div className=" w-full min-h-[80px] bg-comment-bg rounded-lg p-3 flex flex-col text-head2 items-start gap-3">
      <div className="flex items-center gap-2 w-full">
        <div className="h-[28px] aspect-square rounded-[50%] bg-comment-profile"></div>
        <p className="font-tkt-medium text-desc-h text-sm">ლუკა</p>
        <p className="ml-auto text-desc2 block text-sm">ორშ 15:10</p>
      </div>
      <div className="text-head2 text-[15px] text-right w-full mt-1">
        ნამდვილად კარგი მოსასმენი იყო
      </div>
    </div>
  );
}
