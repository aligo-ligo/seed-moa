import { ReactNode, useEffect } from "react";
import { ToastType } from "../../store/toastStore";
import useToastList from "../../hooks/useToastList";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

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
	config = { duration: 3000 },
}: Props) => {
	const ref = document.querySelector("#toast-root");
	const { duration } = config;
	const { toastList } = useToastList();

	const isShown = toastList.includes(toastType);

	useEffect(() => {
		if (!isShown) {
			return undefined;
		}

		const timer = setTimeout(() => {
			close();
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
