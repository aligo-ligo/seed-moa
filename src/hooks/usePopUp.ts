import { useContext, useRef } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { ModalContext } from "../context/ModalContext";
import { useOnClickOutside } from "./useOnClickOutside";

const usePopUp = () => {
	const { isSideBarOpen, openSideBar, closeSideBar } =
		useContext(SideBarContext);
	const {
		isModalOpen,
		openModal,
		closeModal,
		buttonModalType,
		changeModalType,
	} = useContext(ModalContext);
	const outside = useRef<any>(null);

	const handlerOutside = () => {
		closeSideBar();
		closeModal();
	};

	useOnClickOutside(outside, handlerOutside);

	return {
		isSideBarOpen,
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
