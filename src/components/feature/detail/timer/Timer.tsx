import { ReactNode, useEffect, useState } from 'react';

import { TooltipProvider } from '@/context/TimerContext';
import useTimeout from '@/hooks/useTimeout';

type TimerProps = {
  mountKey: string;
  delay: number;
  children: ReactNode;
};

const Timer = ({ mountKey, children, delay = 3 }: TimerProps) => {
  const KEY = `Timer-${mountKey}`;
  const [isOpen, setIsOpen] = useState(delay <= 0 || sessionStorage.getItem(KEY) ? false : true);

  useEffect(() => {
    if (mountKey) {
      setIsOpen(true);
      sessionStorage.setItem(KEY, 'true');
    }
  }, [KEY, mountKey]);

  useTimeout(() => {
    setIsOpen(false);
  }, delay);

  return <TooltipProvider value={{ isOpen, setIsOpen }}>{children}</TooltipProvider>;
};

export default Timer;
