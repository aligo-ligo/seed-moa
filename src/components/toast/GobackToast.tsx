// ToastA.tsx

import { TOAST_TYPE } from "../../store/toastStore";
import ToastContainer from "../layout/ToastContainer";

const GobackToast = () => {
	return (
		<ToastContainer toastType={TOAST_TYPE.backToast}>
			<div className="flex items-center justify-center w-80 h-16 px-3 py-5 rounded-3xl shadow-orange-500 bg-orange-300 text-white">
				앗 죄송합니다 이전 버튼으로 이동해주세요
			</div>
		</ToastContainer>
	);
};

export default GobackToast;
