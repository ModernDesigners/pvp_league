import { Link } from "react-router";
import { INavLink } from "../../interfaces/nav-link-interface";

const NavLink = (e: INavLink) => {
  return (
    <li>
      <Link
        to={e.linkTo}
        className="flex justify-center F_tkt_regular text-[16px] text-head relative nav_link_hover"
      >
        {e.title}
      </Link>
    </li>
  );
};

export default NavLink;
