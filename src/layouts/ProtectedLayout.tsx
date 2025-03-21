import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";

const ProtectedLayout: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
