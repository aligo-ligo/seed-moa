import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import usePopUp from "../../hooks/usePopUp";

const Portal = () => {
	const { isModalOpen, openModal, closeModal, outside } = usePopUp();

	return (
		<>
			<div className="flex gap-4">
				<button
					onClick={() => openModal()}
					className="h-12 w-full bg-[#e0e0de] rounded-md mt-4"
				>
					성공
				</button>

				<button
					onClick={() => openModal()}
					className="h-12 w-full bg-[#e0e0de] rounded-md mt-4"
				>
					실패
				</button>
				{isModalOpen &&
					createPortal(
						<ModalContent
							onClose={openModal}
							outside={outside}
							closeModal={closeModal}
						/>,
						document.body
					)}
			</div>
		</>
	);
};

export default Portal;
