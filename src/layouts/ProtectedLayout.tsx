import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const ProtectedLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
