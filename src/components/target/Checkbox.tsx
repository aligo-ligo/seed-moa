import { useState } from "react";
import usePopUp from "../../hooks/usePopUp";
import { createPortal } from "react-dom";
import ModalContent from "../common/ModalContent";

type Props = {
	children: React.ReactNode;
	value: string;
	id: number;
};

const Checkbox = ({ value, id, children }: Props) => {
	console.log("inCheckbox", id);
	// const [checked, setChecked] = useState(false);

	console.log("inChe", value);
	return (
		<div className="mb-3">
			<div className="flex items-center my-5">
				<div className="flex">{children}</div>
			</div>
		</div>
	);
};

export default Checkbox;
