import { create } from "zustand";

export const TOAST_TYPE = {
	toastA: "toastA",
	toastB: "toastB",
	toastC: "toastC",
};

export type ToastType = keyof typeof TOAST_TYPE;

interface ToastStore {
	toastTitle: ToastType;
	updateToastTitle: (val: ToastType) => void;
}

export const toastStore = create<ToastStore>((set) => ({
	toastTitle: "toastA",
	updateToastTitle: (val) => set(() => ({ toastTitle: val })),
}));
