import React, { createContext, useState } from "react";

export type SideBarContextProps = {
	isSideBarOpen: boolean;
	openSideBar: () => void;
	closeSideBar: () => void;
};

export interface SideBarProviderProps {
	children: React.ReactNode;
}

const initialValue: SideBarContextProps = {
	isSideBarOpen: false,
	openSideBar: () => {
		console.log("Open SideBar placeholder");
	},
	closeSideBar: () => {
		console.log("Open SideBar placeholder");
	},
};

export const SideBarContext = createContext<SideBarContextProps>(initialValue);
export const SideBarProvider = ({ children }: SideBarProviderProps) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const openSideBar = () => {
		setIsSideBarOpen(true);
	};

	const closeSideBar = () => {
		setIsSideBarOpen(false);
	};

	return (
		<SideBarContext.Provider
			value={{ isSideBarOpen, openSideBar, closeSideBar }}
		>
			{children}
		</SideBarContext.Provider>
	);
};
