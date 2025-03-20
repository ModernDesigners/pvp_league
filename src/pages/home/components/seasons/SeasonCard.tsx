import { ISeasonInfo } from "../../../../API/SeasonsAPI";

export default function SeasonCard({ id, title, image, date }: ISeasonInfo) {
  console.log(id, title, image, date);
  return (
    <div className="relative flex-1 w-full min-w-[45%] h-[170px] bg-var-card p-5 text-head text-lg overflow-hidden cursor-pointer group">
      <h2 className="relative z-10 backface-hidden">
        <span className="text-main">{title.substring(0, 1)}</span>
        {title.substring(1)}
      </h2>
      <div className="absolute z-[5] h-full w-full bg-gradient-to-r from-var-card from-5% to-transparent to-100% top-0 left-0"></div>
      <div className="absolute z-[6] h-[2px] w-[0%] bg-main bottom-0 left-0 group-hover:w-full transition-all duration-700"></div>
      <img
        src={image}
        className="absolute right-0 top-0 w-full object-cover z-0 min-h-full group-hover:scale-105 transition-transform duration-500 backface-hidden "
        alt={`PVP Battle - ${title}`}
      />
    </div>
  );
}
