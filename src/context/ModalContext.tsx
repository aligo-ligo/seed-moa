import React, { createContext, useState } from "react";

export type ModalContextProps = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	buttonModalType: string;
	changeModalType: (name: string) => void;
};

export interface ModalProviderProps {
	children: React.ReactNode;
}

const initialValue: ModalContextProps = {
	isModalOpen: false,
	openModal: () => {
		console.log("");
	},
	closeModal: () => {
		console.log("");
	},
	buttonModalType: "",

	changeModalType: () => {
		console.log("");
	},
};

export const ModalContext = createContext<ModalContextProps>(initialValue);
export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonModalType, setButtonModalType] = useState("");

	const changeModalType = (name: string) => {
		setButtonModalType(name);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				buttonModalType,
				changeModalType,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
