import React from "react";
import { IMyButton } from "../interfaces/my-button-interface";

const MyButton: React.FC<IMyButton> = ({ title, color, small, click }) => {
  return (
    <button
      onClick={click}
      className={` text-${color}  rounded-sm cursor-pointer border border-solid border-var-border transition-colors duration-300 hover:bg-button-hover ${
        small ? "px-5 py-1 text-sm" : "px-15 py-2"
      } `}
    >
      {title}
    </button>
  );
};

export default MyButton;
