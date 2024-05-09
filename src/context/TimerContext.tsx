import { createContext, useContext } from 'react';

const TimerCotnext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

export const TimerProvider = TimerCotnext.Provider;

export const useTimerCotnext = () => {
  const context = useContext(TimerCotnext);

  if (!context) {
    throw new Error('useTimerCotnext must be used within a TimerProvider');
  }

  return context;
};
