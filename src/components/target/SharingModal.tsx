import { FiX } from "react-icons/fi";

type Props = {
	closeModal: () => void;
};

const SharingModal = ({ closeModal }: Props) => {
	return (
		<div className="bg-white rounded-md">
			<div className="flex justify-end cursor-pointer">
				<FiX onClick={closeModal} onKeyDown={closeModal} />
			</div>
			<h1 className="font-semibold text-2xl">주변 사람들에게 알리고!</h1>
			<p>공유해준 분에게 추첨을 통해 스타벅스 쿠폰을 보내드려요</p>
			<div className="flex items-center mb-8 border-main border-2 border-solid rounded-md py-2 px-4 relative">
				<input
					type="text"
					className="placeholder:text-xs w-full outline-none text-emerald-800"
				/>
				<button
					className="text-sm w-10 h-min bg-orange-400 py-1 px-1 rounded-md text-white"
					type="button"
				>
					복사
				</button>
			</div>
			<div className="flex justify-center">
				<button
					className="text-lg w-1/2 h-8 desktop:w-9/12 desktop:h-10 bg-main rounded-md desktop:text-xl text-white"
					onClick={closeModal}
				>
					닫기
				</button>
			</div>
		</div>
	);
};

export default SharingModal;
