import React from "react";
import pele from "/assets/pele.png";
import nikki from "/assets/nikki.png";
const ArtistImages: React.FC = () => {
  return (
    <div className="w-[50%] h-full flex items-center justify-between  card-images ">
      <img src={pele} alt="Pele" className=" h-[90%] w-[40%] mt-auto " />
      <img src={nikki} alt="Nikki" className=" h-[90%] w-[40%] mt-auto " />
    </div>
  );
};

export default ArtistImages;
