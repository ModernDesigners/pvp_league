import { Link } from "react-router";
import { navLinks } from "../API/navLinks";
import { INavLink } from "../interfaces/nav-link-interface";
import { LogOutIcon } from "../icons/myIcons";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-5">
      <div className="w-[70%] bg-amber-50 p-6 flex justify-between items-center">
        <ul className="flex gap-3">
          {navLinks.map((e: INavLink) => (
            <li>
              <Link to={e.linkTo} className="text-lg">
                {e.title}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="text-2xl">Logo</h1>

        <div className="flex gap-4 items-center">
          <LogOutIcon width={25} height={25} className="cursor-pointer" />
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
