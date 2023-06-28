import { createContext } from "react";
import { TargetService } from "../types/TargetTypes";

interface InfoProviderProps {
	children: React.ReactNode;
	targetService: TargetService;
}

export const TargetContext = createContext<TargetService | null>(null);
export const TargetProvider = ({
	children,
	targetService,
}: InfoProviderProps) => {
	return (
		<TargetContext.Provider value={targetService}>
			{children}
		</TargetContext.Provider>
	);
};
