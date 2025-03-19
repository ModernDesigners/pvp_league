import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import HomePage from "./pages/home/HomePage";
import ChampionsPage from "./pages/champions/ChampionsPage";
import Login from "./pages/login/Login";

const Router = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/champions" element={<ChampionsPage />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
