import create from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
	token: string;
};

type Actions = {
	setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore & Actions>()(
	persist(
		(set) => ({
			token: "",
			setToken: (token) => set(() => ({ token: token })),
		}),
		{ name: "global", getStorage: () => localStorage }
	)
);
