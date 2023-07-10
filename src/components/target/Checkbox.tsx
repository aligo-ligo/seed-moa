import { useState } from "react";
import usePopUp from "../../hooks/usePopUp";
import { createPortal } from "react-dom";
import ModalContent from "../common/ModalContent";

type Props = {
	children: React.ReactNode;
	value: string;
	type: string;
};

const Checkbox = ({ type, value, children }: Props) => {
	const { openModal, changeModalType, updateSubGoalValue } = usePopUp();

	return (
		<div className="mb-3">
			<div className="flex items-center my-5">
				<div className="flex">
					{type === "guest" ? (
						<button className="mr-3 border-2 p-2 text-orange-400 rounded-md bg-orange-400" />
					) : (
						<button
							className="mr-3 border-2 p-2 text-orange-400 rounded-md"
							onClick={() => {
								updateSubGoalValue(value);
								openModal();
								changeModalType("check");
							}}
						/>
					)}

					{children}
				</div>
			</div>
		</div>
	);
};

export default Checkbox;
