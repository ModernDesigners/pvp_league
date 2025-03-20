import React from "react";
import { Link } from "react-router";

const NavLogo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="text-[20px] font-bruno text-var-white cursor-pointer "
    >
      <span className="text-var-red ">PVP</span> LEAGUE
    </Link>
  );
};

export default NavLogo;
