import React from "react";
export interface IParticipantImg {
  image: string;
}
const ParticipantImage: React.FC<IParticipantImg> = ({ image }) => {
  return (
    <div className="w-full h-[180px]  border-b-var-red flex justify-center border-b-2 ">
      <img src={image} className="w-[200px] h-full object-cover" alt="Pele" />
    </div>
  );
};

export default ParticipantImage;
