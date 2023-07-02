import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../context/ModalContext";

type Props = {
	width: number;
};

const useSidebar = () => {
	const { isOpen, openModal, closeModal } = useContext(ModalContext);
	const outside = useRef<any>(null);

	const handlerOutside = (e: any) => {
		closeModal();
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerOutside);
		return () => {
			document.removeEventListener("mousedown", handlerOutside);
		};
	}, []);

	return { isOpen, outside, openModal, closeModal };
};

export default useSidebar;
