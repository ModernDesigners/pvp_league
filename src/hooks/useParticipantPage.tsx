import { useNavigate } from "react-router-dom";

export const useParticipantPage = () => {
  const navigate = useNavigate();

  return (link: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(link);
  };
};
