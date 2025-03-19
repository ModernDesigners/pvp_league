import React from "react";
import { IHomeHButton } from "../../../../interfaces/home-header-button-interface";

const HomeHButton: React.FC<IHomeHButton> = ({
  color,
  bgColor,
  title,
}: IHomeHButton) => {
  return (
    <button
      className={`bg-${bgColor} text-${color} px-15 py-2 rounded-sm cursor-pointer `}
    >
      {title}
    </button>
  );
};

export default HomeHButton;
