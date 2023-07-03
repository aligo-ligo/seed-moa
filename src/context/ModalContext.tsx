import React, { createContext, useState } from "react";

export type ModalContextProps = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export interface ModalProviderProps {
	children: React.ReactNode;
}

const initialValue: ModalContextProps = {
	isModalOpen: false,
	openModal: () => {
		console.log("Open Modal placeholder");
	},
	closeModal: () => {
		console.log("Open Modal placeholder");
	},
};

export const ModalContext = createContext<ModalContextProps>(initialValue);
export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
