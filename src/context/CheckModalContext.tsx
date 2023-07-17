import React, { createContext, useState } from "react";

export type CheckModalContextProps = {
	subGoalValue: string;
	updateSubGoalValue: (value: string) => void;
	isSubGoalComplete: string | null;
	updateIsSubGoalComplete: (value: string | null) => void;
};

export interface CheckModalProviderProps {
	children: React.ReactNode;
}

const initialValue: CheckModalContextProps = {
	subGoalValue: "",
	updateSubGoalValue: () => {
		console.log("");
	},
	isSubGoalComplete: null,
	updateIsSubGoalComplete: () => {
		console.log("");
	},
};

export const CheckModalContext =
	createContext<CheckModalContextProps>(initialValue);
export const CheckModalProvider = ({ children }: CheckModalProviderProps) => {
	const [subGoalValue, setSubGoalValue] = useState("");
	const [isSubGoalComplete, setIsSubGoalComplete] = useState<string | null>(
		null
	);

	const updateSubGoalValue = (value: string) => {
		setSubGoalValue(value);
	};

	const updateIsSubGoalComplete = (value: string | null) => {
		setIsSubGoalComplete(value);
	};

	return (
		<CheckModalContext.Provider
			value={{
				subGoalValue,
				updateSubGoalValue,
				isSubGoalComplete,
				updateIsSubGoalComplete,
			}}
		>
			{children}
		</CheckModalContext.Provider>
	);
};
