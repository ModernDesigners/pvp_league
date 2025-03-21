import React from "react";
import pele from "/assets/participants/pele.png";
import nikki from "/assets/participants/nikki.png";
const ArtistImages: React.FC = () => {
  return (
    <div className="w-[50%] max-w-[450px] h-full flex items-center justify-evenly  card-images border-b-2 border-b-main">
      <img
        src={pele}
        alt="Pele"
        className=" h-auto max-h-[80%] max-w-[40%] mt-auto "
      />
      <img
        src={nikki}
        alt="Nikki"
        className=" h-auto max-h-[80%] max-w-[40%] mt-auto "
      />
    </div>
  );
};

export default ArtistImages;
