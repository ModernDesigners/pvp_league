import { Link } from "react-router";
import { INavLink } from "../../interfaces/nav-link-interface";

const NavLink = (e: INavLink) => {
  return (
    <li>
      <Link to={e.linkTo} className=" F_tkt_regular text-lg text-var-white">
        {e.title}
      </Link>
    </li>
  );
};

export default NavLink;
