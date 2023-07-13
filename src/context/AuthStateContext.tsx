import React, { createContext, useState } from "react";

export type AuthStateContextProps = {
	isLoggedIn: boolean;
	updateLoggedIn: (value: boolean) => void;
};

export interface AuthStateProviderProps {
	children: React.ReactNode;
}

const initialValue: AuthStateContextProps = {
	isLoggedIn: false,
	updateLoggedIn: () => {
		console.log("");
	},
};

export const AuthStateContext =
	createContext<AuthStateContextProps>(initialValue);
export const AuthStateProvider = ({ children }: AuthStateProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const updateLoggedIn = (value: boolean) => {
		setIsLoggedIn(value);
	};

	return (
		<AuthStateContext.Provider
			value={{
				isLoggedIn,
				updateLoggedIn,
			}}
		>
			{children}
		</AuthStateContext.Provider>
	);
};
