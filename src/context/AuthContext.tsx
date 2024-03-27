import React, { createContext } from "react";
import { AuthService } from "../types/AuthType";

interface AuthProviderProps {
  children: React.ReactNode;
  authService: AuthService;
}

export const AuthContext = createContext<AuthService | null>(null);
export const AuthProvider = ({ children, authService }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};
