import { SetStateAction, useEffect, useRef, useState } from "react";
type Props = React.Dispatch<SetStateAction<boolean>>;

const useSidebar = (setIsOpen: Props) => {
	const outside = useRef<any>(null);

	const handlerOutside = (e: any) => {
		if (!outside.current.contains(e.target)) {
			toggleSide();
		}
	};

	const toggleSide = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerOutside);
		return () => {
			document.removeEventListener("mousedown", handlerOutside);
		};
	}, []);

	return { outside, toggleSide };
};

export default useSidebar;
