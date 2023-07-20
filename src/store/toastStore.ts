import { create } from "zustand";

export const TOAST_TYPE = {
	toastA: "toastA",
	toastB: "toastB",
	createToast: "createToast",
	logoutToast: "logoutToast",
} as const;

export type ToastType = keyof typeof TOAST_TYPE;

interface ToastStore {
	toastTitle: ToastType[];
	updateToastTitle: (val: ToastType) => void;
	removeToastTitle: (val: ToastType) => void;
}

export const toastStore = create<ToastStore>((set) => ({
	toastTitle: [],
	updateToastTitle: (toastType: ToastType) =>
		set((store) => ({ toastTitle: [...store.toastTitle, toastType] })),
	removeToastTitle: (toastType: ToastType) =>
		set((store) => ({
			toastTitle: store.toastTitle.filter((t) => t !== toastType),
		})),
}));
