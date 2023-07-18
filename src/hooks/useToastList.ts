// useToastList.ts

import { useCallback } from "react";
import { ToastType, toastStore } from "../store/toastStore";

const useToastList = () => {
	const toastList = toastStore<ToastType>((state) => state.toastTitle);
	const updateToastTitle = toastStore((state) => state.updateToastTitle);

	const show = useCallback(
		(toastType: ToastType) => {
			updateToastTitle(toastType);
		},
		[updateToastTitle]
	);

	const close = useCallback((toastType: ToastType) => {
		console.log(toastType);
	}, []);

	return {
		toastList,
		show,
		close,
	};
};

export default useToastList;
