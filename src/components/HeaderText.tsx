import React from "react";
import RedLine from "./RedLine";
import { IHeaderText } from "../interfaces/header-text-interface";

const HeaderText: React.FC<IHeaderText> = ({ redText, whiteText }) => {
  return (
    <div className="flex flex-col items-center py-10 gap-5">
      <div>
        <h1 className="text-[22px] F_tkt_regular text-var-white cursor-pointer ">
          <span className="text-var-red ">{redText}</span> {whiteText}
        </h1>
      </div>
      <RedLine />
    </div>
  );
};

export default HeaderText;
