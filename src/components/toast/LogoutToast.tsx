// ToastA.tsx

import { TOAST_TYPE } from "../../store/toastStore";
import ToastContainer from "../layout/ToastContainer";

const LogoutToast = () => {
	return (
		<ToastContainer toastType={TOAST_TYPE.logoutToast}>
			<div className="flex items-center justify-center w-80 h-16 px-3 py-5 rounded-3xl shadow-orange-500 bg-orange-300 text-white">
				로그아웃 되었습니다.
			</div>
		</ToastContainer>
	);
};

export default LogoutToast;
