import NavLinkList from "./NavLinkList";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-15 py-5   ">
      <h1 className="text-[22px] F_bruno_regular text-var-white ">
        <span className="text-var-red ">PVP</span> LEAGUE
      </h1>
      <NavLinkList />
    </nav>
  );
};

export default Navbar;
