import { createContext, PropsWithChildren, useContext, useState } from 'react';

const RoutineContext = createContext<{
  isOpen: boolean;
  onClose: VoidFunction;
} | null>(null);

export const RoutineProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen((prev) => !prev);

  return <RoutineContext.Provider value={{ isOpen, onClose }}>{children}</RoutineContext.Provider>;
};

export const useRoutineContext = () => {
  const context = useContext(RoutineContext);

  if (!context) {
    throw new Error('useRoutineContext must be used within a RoutineContext');
  }

  return context;
};
