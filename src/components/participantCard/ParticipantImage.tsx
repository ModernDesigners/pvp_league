import React from "react";
export interface IParticipantImg {
  image: string;
  championsList?: boolean;
}
const ParticipantImage: React.FC<IParticipantImg> = ({
  image,
  championsList,
}) => {
  return (
    <div
      className={`w-full h-[160px] ${
        championsList ? "border-b-var-yellow" : "border-b-main"
      }  flex justify-center border-b-2`}
    >
      <img src={image} className="w-auto h-full object-cover" alt="Pele" />
    </div>
  );
};

export default ParticipantImage;
