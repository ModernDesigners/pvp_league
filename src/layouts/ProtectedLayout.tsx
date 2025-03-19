import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>
      <div>Protected Layout</div>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedLayout;
