import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthService = () => useContext(AuthContext);
