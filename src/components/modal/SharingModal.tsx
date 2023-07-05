import { FiX } from "react-icons/fi";
import StyledButton from "../common/StyledButton";

type Props = {
	closeModal: () => void;
};

const SharingModal = ({ closeModal }: Props) => {
	return (
		<div className="bg-white rounded-md">
			<div className="flex justify-end cursor-pointer">
				<FiX onClick={closeModal} onKeyDown={closeModal} />
			</div>
			<h1 className="font-semibold text-xl">주변 사람들에게 알리고</h1>
			<p className="font-light text-sm">
				공유해준 분에게 추첨을 통해 스타벅스 쿠폰을 보내드려요
			</p>
			<div className="flex items-center my-8 border-main border-2 border-solid rounded-md py-2 px-4 relative">
				<input
					type="text"
					className="placeholder:text-xs w-full outline-none text-emerald-800"
				/>
				<StyledButton styleName="copy" type="button" onClick={closeModal}>
					복사
				</StyledButton>
			</div>
			<div className="flex justify-center">
				<StyledButton
					styleName="sharingExit"
					type="button"
					onClick={closeModal}
				>
					닫기
				</StyledButton>
			</div>
		</div>
	);
};

export default SharingModal;
