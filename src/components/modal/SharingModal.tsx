import { FiX } from "react-icons/fi";
import StyledButton from "../common/StyledButton";
import ToastA from "../common/ToastA";
import useToastList from "../../hooks/useToastList";

type Props = {
	closeModal: () => void;
	shareUrl: string | undefined;
};

const SharingModal = ({ shareUrl, closeModal }: Props) => {
	const { show } = useToastList();

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
					defaultValue={shareUrl}
					type="text"
					className="placeholder:text-xs w-full outline-none text-emerald-800"
				/>
				<StyledButton
					styleName="copy"
					type="button"
					onClick={() => show("toastA")}
				>
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
			<ToastA />
		</div>
	);
};

export default SharingModal;
