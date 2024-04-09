import { createContext, PropsWithChildren, useState } from "react";

export type SideBarContextProps = {
  isOpen: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
};

const initialValue: SideBarContextProps = {
  isOpen: false,
  openSideBar: () => {},
  closeSideBar: () => {},
};

export const SideBarContext = createContext<SideBarContextProps>(initialValue);
export const SideBarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(true);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, openSideBar, closeSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
