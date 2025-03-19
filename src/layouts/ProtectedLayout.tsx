import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProtectedLayout = () => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedLayout;
