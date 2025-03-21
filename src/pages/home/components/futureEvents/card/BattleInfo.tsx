import { useState } from "react";
import MyButton from "../../../../../components/MyButton";
import { IPrevBattlesInfo } from "../../../../../interfaces/prev-battles-info-interface";

const BattleInfo: React.FC<IPrevBattlesInfo> = ({
  currentArtist,
  enemyArtist,
  battleDate,
}) => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="h-full flex gap-5">
      <div className="px-10 h-full flex flex-col justify-between py-6 border-r border-var-border">
        <h1 className="font-bruno text-var-white">
          {currentArtist} VS {enemyArtist}
        </h1>
        <div className="flex flex-col gap-2">
          <p className="font-tkt-semibold text-desc">{battleDate}</p>
          <p className="font-tkt-semibold text-desc">20:00 საათი</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-6 items-start">
        <MyButton
          small
          color={"head"}
          click={() => setShowStats(!showStats)}
          title={showStats ? "დამალე სტატისტიკა" : "მაჩვენე სტატისტიკა"}
        />

        <div className="flex gap-2 flex-col text-sm mt-auto">
          <p className="text-desc-h font-bruno ">
            {currentArtist}:{" "}
            {showStats ? (
              <span className="text-var-green">2 / 1 / 2</span>
            ) : (
              "..."
            )}
          </p>
          <p className="text-desc-h font-bruno ">
            {enemyArtist}:
            {showStats ? (
              <span className="text-var-red">1 / 2 / 1</span>
            ) : (
              "..."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BattleInfo;
