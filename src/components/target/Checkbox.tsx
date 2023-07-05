import { useState } from "react";
import usePopUp from "../../hooks/usePopUp";
import { createPortal } from "react-dom";
import ModalContent from "../common/ModalContent";

const Checkbox = ({ children }: any) => {
	// const [checked, setChecked] = useState(false);
	const {
		isModalOpen,
		openModal,
		closeModal,
		outside,
		buttonModalType,
		changeModalType,
	} = usePopUp();

	return (
		<div className="mb-3">
			<div className="flex items-center my-5">
				<button
					className="mr-3 border-2  p-2 text-orange-400 rounded-md"
					onClick={() => {
						openModal();
						changeModalType("check");
					}}
				/>
				<p>{children}</p>
			</div>
			{isModalOpen &&
				createPortal(
					<ModalContent
						buttonModalType={buttonModalType}
						outside={outside}
						closeModal={closeModal}
					/>,
					document.body
				)}
		</div>
	);
};

export default Checkbox;
