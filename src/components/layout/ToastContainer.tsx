import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import useToastList from "../../hooks/useToastList";
import { ToastType } from "../../store/toastStore";

interface Props {
  children: ReactNode;
  toastType: ToastType;
  config?: {
    duration: number;
  };
}

const ToastContainer = ({
  children,
  toastType,
  config = { duration: 2000 },
}: Props) => {
  const ref = document.querySelector("#toast-root");
  const { duration } = config;
  const { toastList, close } = useToastList();

  const isShown = toastList.includes(toastType);

  useEffect(() => {
    if (!isShown) {
      return undefined;
    }

    const timer = setTimeout(() => {
      close(toastType);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [close, duration, isShown, toastType]);

  if (!ref) {
    return null;
  }
  return createPortal(
    <AnimatePresence>
      {isShown && (
        <motion.div
          key={toastType}
          layout
          initial={{ opacity: 0.5, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: 12 }}
          transition={{ ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    ref
  );
};

export default ToastContainer;
