import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useGenerationStore } from "../../store/store";
import { LOCAL_STORAGE_KEY } from "../../utils/constant/storage";

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  const isLogged = Boolean(localStorage.getItem(LOCAL_STORAGE_KEY.accessToken));
  const { updateHook } = useGenerationStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      console.log("--afefae-----------");
      navigate("/signin");
    }
  }, [isLogged, updateHook, navigate]);

  return <>{children}</>;
};

export default Authorization;
