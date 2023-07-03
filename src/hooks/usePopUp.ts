import { useContext, useEffect, useRef } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { ModalContext } from "../context/ModalContext";

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

	const handlerOutside = (e: any) => {
		//더 좋은 방법이 있을것같다.
		closeSideBar();
		closeModal();
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerOutside);
		return () => {
			document.removeEventListener("mousedown", handlerOutside);
		};
	}, []);

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
