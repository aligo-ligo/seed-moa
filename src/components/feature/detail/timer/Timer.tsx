import { ReactNode, useEffect, useState } from 'react';
import { useTimeout } from 'usehooks-ts';

type TimerProps = {
  /** 마운트시 최초로 한 번만 보여주고 싶을 때, sessionStorage에 저장할 키를 지정합니다. (없다면 항시 보여줍니다.) */
  mountKey?: string;
  delay: number;
  children: ReactNode;
};

const Timer = ({ mountKey, children, delay = 0 }: TimerProps) => {
  const KEY = `Timer-${mountKey}`;
  const [isOpen, setIsOpen] = useState(sessionStorage.getItem(KEY) ? false : true);

  useEffect(() => {
    if (mountKey) {
      sessionStorage.setItem(KEY, 'true');
    }
  }, [KEY, mountKey]);

  useTimeout(() => {
    setIsOpen(false);
  }, delay);

  return <>{children}</>;
};

export default Timer;
