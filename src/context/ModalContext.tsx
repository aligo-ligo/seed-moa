import React, { createContext, useState } from "react";

export type ModalContextProps = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export interface ModalProviderProps {
	children: React.ReactNode;
}

const initialValue: ModalContextProps = {
	isOpen: false,
	openModal: () => {
		console.log("Open modal placeholder");
	},
	closeModal: () => {
		console.log("Open modal placeholder");
	},
};

export const ModalContext = createContext<ModalContextProps>(initialValue);
export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
