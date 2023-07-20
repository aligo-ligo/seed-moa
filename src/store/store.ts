import { create } from "zustand";

interface GenerationState {
	updateHook: boolean;
	setUpdateHook: (updateHook: any) => void;
}

export const useGenerationStore = create<GenerationState>((set) => ({
	updateHook: false,
	setUpdateHook: (updateHook) => set({ updateHook: !updateHook }),
}));
