import React from "react";
import { IMyButton } from "../interfaces/my-button-interface";

const MyButton: React.FC<IMyButton> = ({ title, color }) => {
  return (
    <button
      className={` text-${color} px-15 py-2 rounded-sm cursor-pointer border border-solid border-var-border `}
    >
      {title}
    </button>
  );
};

export default MyButton;
