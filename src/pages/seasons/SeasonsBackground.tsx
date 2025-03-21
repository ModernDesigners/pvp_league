import React from "react";
import seasonImage from "/assets/images/seasonpage.webp";

const SeasonsBackground: React.FC = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full  ">
      <img
        className="w-full h-full object-cover brightness-20"
        src={seasonImage}
        alt="Nikki Vs Moska Picture"
      />
    </div>
  );
};

export default SeasonsBackground;
