import { PlayIcon, ViewsIcon } from "../icons/myIcons";

interface IvideoCard {
  id: number;
  image: string;
  title: string;
  views: number;
  date: string;
}

export default function VideoCard({
  id,
  image,
  title,
  views,
  date,
}: IvideoCard) {
  const formattedViews = new Intl.NumberFormat("en-US")
    .format(views)
    .replace(/,/g, " ");

  return (
    <div className="flex flex-col gap-2 w-[350px]">
      <div className="group relative aspect-video w-full bg-black cursor-pointer flex justify-center items-center rounded-md overflow-hidden">
        <div className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000052] to-transparent"></div>
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute z-[1] top-0 left-0 w-full h-full bg-[#00000052]"></div>
        <img
          src={image}
          className="absolute top-0 left-0 w-full h-full object-cover "
          alt="pele vs nikki slow"
        />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 relative z-[3] h-[55px] aspect-square rounded-[50%] bg-[#000000a4] flex justify-center items-center">
          <PlayIcon />
        </div>
        <div className="absolute w-full flex justify-between p-2 bottom-0 z-[2]">
          <div className="flex items-center gap-2">
            <ViewsIcon className="[&>path]:fill-desc-h h-[20px] aspect-square " />
            <p className="text-desc-h font-tkt-semibold text-sm tracking-widest">
              {formattedViews}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-desc-h font-tkt-semibold text-sm tracking-widest">
              {date}
            </p>
          </div>
        </div>
      </div>
      <h3 className="font-bruno text-[15px] text-head cursor-pointer">
        {title}
      </h3>
    </div>
  );
}
