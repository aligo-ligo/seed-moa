import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

import { useTimerCotnext } from '@/context/TimerContext';

type OpacityBoxProps = {
  children: ReactNode;
};

const ObserverExitEvent = ({ children }: OpacityBoxProps) => {
  const { isOpen } = useTimerCotnext();

  return <AnimatePresence initial={false}>{isOpen && <>{children}</>}</AnimatePresence>;
};

export default ObserverExitEvent;
