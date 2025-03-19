import React from "react";
import MyButton from "../../../../../components/MyButton";

const EventButtons: React.FC = () => {
  return (
    <div className="flex flex-col  justify-center gap-4 px-5">
      <MyButton color="var-red" title="ონლაინ ყურება" />
      <MyButton color="var-white" title="ბილეთები" />
    </div>
  );
};

export default EventButtons;
