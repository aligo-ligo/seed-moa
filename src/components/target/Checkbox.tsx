import { useState } from "react";
import usePopUp from "../../hooks/usePopUp";
import { createPortal } from "react-dom";
import ModalContent from "../common/ModalContent";

type Props = {
	children: React.ReactNode;
	value: string;
	id: number;
	type: string;
};

const Checkbox = ({ type, value, id, children }: Props) => {
	console.log("inCheckbox", id);
	const {
		openModal,

		changeModalType,
	} = usePopUp();

	console.log("inChe", value);
	return (
		<div className="mb-3">
			<div className="flex items-center my-5">
				<div className="flex">
					{type === "guest" ? (
						<button
							name={`${id}`}
							className="mr-3 border-2 p-2 text-orange-400 rounded-md bg-orange-400"
						/>
					) : (
						<button
							name={`${id}`}
							className="mr-3 border-2 p-2 text-orange-400 rounded-md"
							onClick={() => {
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
