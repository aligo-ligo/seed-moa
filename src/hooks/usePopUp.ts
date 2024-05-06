import { useContext, useRef } from "react";

import { ModalContext } from "../context/ModalContext";
import { SideBarContext } from "../context/SideBarContext";
import { useOnClickOutside } from "./useOnClickOutside";

//TODO : 기능 별로 분리하여 정확한 역할을 기준으로 분리

const usePopUp = () => {
	const { isOpen, openSideBar, closeSideBar } =
		useContext(SideBarContext);
	const {
		isModalOpen,
		openModal,
		closeModal,
		buttonModalType,
		changeModalType,
	} = useContext(ModalContext);
	const outside = useRef(null);

	const handlerOutside = () => {
		closeSideBar();
		closeModal();
	};

	useOnClickOutside(outside, handlerOutside);

	return {
		isOpen,
		outside,
		openSideBar,
		closeSideBar,
		isModalOpen,
		openModal,
		closeModal,
		buttonModalType,
		changeModalType,
	};
};

export default usePopUp;
