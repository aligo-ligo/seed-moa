import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../context/ModalContext";

const useSidebar = () => {
	const { closeModal } = useContext(ModalContext);
	const outside = useRef<any>(null);

	const handlerOutside = (e: any) => {
		if (!outside.current.contains(e.target)) {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerOutside);
		return () => {
			document.removeEventListener("mousedown", handlerOutside);
		};
	}, []);

	return { outside, closeModal };
};

export default useSidebar;
