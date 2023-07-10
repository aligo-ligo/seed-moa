import React, { createContext, useState } from "react";

export type ModalContextProps = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	buttonModalType: string;
	changeModalType: (name: string) => void;
	subGoalValue: string;
	updateSubGoalValue: (value: string) => void;
};

export interface ModalProviderProps {
	children: React.ReactNode;
}

const initialValue: ModalContextProps = {
	isModalOpen: false,
	subGoalValue: "",
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
	updateSubGoalValue: () => {
		console.log("");
	},
};

export const ModalContext = createContext<ModalContextProps>(initialValue);
export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonModalType, setButtonModalType] = useState("");
	const [subGoalValue, setSubGoalValue] = useState("");

	const changeModalType = (name: string) => {
		setButtonModalType(name);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const updateSubGoalValue = (value: string) => {
		setSubGoalValue(value);
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				buttonModalType,
				changeModalType,
				subGoalValue,
				updateSubGoalValue,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
