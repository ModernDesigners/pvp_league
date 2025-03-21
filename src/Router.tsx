import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import HomePage from "./pages/home/HomePage";
import ChampionsPage from "./pages/champions/ChampionsPage";
import Login from "./pages/login/Login";
import Participant from "./pages/participant/Participant";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/champions" element={<ChampionsPage />} />
          <Route path="/participant/:id" element={<Participant />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
