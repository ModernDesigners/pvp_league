import React from "react";
import { navLinks } from "../../API/navLinks";
import { INavLink } from "../../interfaces/nav-link-interface";
import NavLink from "./NavLink";
import { SearchIcon } from "../../icons/myIcons";
import AuthButo from "./AuthButo";

const NavLinkList = () => {
  return (
    <ul className="flex gap-6 items-center">
      <SearchIcon color="white" cursor={"pointer"} />
      {navLinks.map((e: INavLink, i: number) => (
        <NavLink linkTo={e.linkTo} title={e.title} key={i} />
      ))}
      <AuthButo />
    </ul>
  );
};

export default NavLinkList;
