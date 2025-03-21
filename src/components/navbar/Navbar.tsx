import React from "react";
import NavLinkList from "./NavLinkList";
import NavLogo from "./NavLogo";

const Navbar: React.FC = () => {
  return (
    <nav className="py-5 fixed left-0 top-0 z-20 w-full  bg-gradient-to-b from-[black] to-transparent">
      <div className="myContainer flex justify-between">
        <NavLogo />
        <NavLinkList />
      </div>
    </nav>
  );
};

export default Navbar;
