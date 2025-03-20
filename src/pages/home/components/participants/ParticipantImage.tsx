import React from "react";
export interface IParticipantImg {
  image: string;
}
const ParticipantImage: React.FC<IParticipantImg> = ({ image }) => {
  return (
    <div className="w-full h-[160px]  border-b-main flex justify-center border-b-2">
      <img src={image} className="w-auto h-full object-cover" alt="Pele" />
    </div>
  );
};

export default ParticipantImage;
