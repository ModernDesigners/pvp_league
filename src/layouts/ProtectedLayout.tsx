import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const ProtectedLayout: React.FC = () => {
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
