import { useCallback, useContext } from 'react';

import { TOAST_MESSAGES } from '@/constants/toast';
import { ToastInterface, ToastUpdateContext } from '@/context/toast/ToastProvider';


const useToast = () => {
  const setToast = useContext(ToastUpdateContext);

  const toast = useCallback(
    ({ type, message}: ToastInterface) => {
      if (type) {
        setToast({ type, message });
      } else {
        setToast({
          type: TOAST_MESSAGES[message].type,
          message: TOAST_MESSAGES[message].text,
        });
      }
      setTimeout(() => {
        setToast(null);
      }, 2000);
    },
    [setToast],
  );

  return toast;
};

export default useToast;
