import React from "react";
import { Link } from "react-router";

const NavLogo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="text-[22px] F_bruno_regular text-var-white cursor-pointer "
    >
      <span className="text-var-red ">PVP</span> LEAGUE
    </Link>
  );
};

export default NavLogo;
