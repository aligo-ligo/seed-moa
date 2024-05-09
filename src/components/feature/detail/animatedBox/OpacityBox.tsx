import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

import { useRoutineContext } from '@/context/RoutineContext';

type OpacityBoxProps = {
  children: ReactNode;
};

const ObserverExitEvent = ({ children }: OpacityBoxProps) => {
  // const { isOpen } = useTimerCotnext();
  const { isOpen } = useRoutineContext();

  return <AnimatePresence>{isOpen && <>{children}</>}</AnimatePresence>;
};

export default ObserverExitEvent;
