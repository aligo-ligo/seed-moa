import VoteModal from "../modal/VoteModal";
import SharingModal from "../target/SharingModal";

type Props = {
	buttonModalType: string;
	outside: any;
	closeModal: () => void;
};

const ModalContent = ({ buttonModalType, outside, closeModal }: Props) => {
	return (
		<div
			className="absolute inset-0 w-full h-auto bg-black bg-opacity-70"
			ref={outside}
		>
			<div className="fixed top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] z-100">
				<div className="flex flex-col justify-evenly items-center shadow-xl bg-white border-2 border-green-50 rounded-xl w-64 h-80 ">
					{buttonModalType === "vote" && <VoteModal closeModal={closeModal} />}
					{buttonModalType === "sharing" && (
						<SharingModal closeModal={closeModal} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ModalContent;
