import { createContext } from "react";
import { GuestService } from "../types/GuestType";

interface GuestProviderProps {
  children: React.ReactNode;
  guestService: GuestService;
}

export const GuestContext = createContext<GuestService | null>(null);
export const GuestProvider = ({
  children,
  guestService,
}: GuestProviderProps) => {
  return (
    <GuestContext.Provider value={guestService}>
      {children}
    </GuestContext.Provider>
  );
};
