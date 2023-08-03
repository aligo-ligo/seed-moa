// ToastA.tsx

import { TOAST_TYPE } from "../../store/toastStore";
import ToastContainer from "../layout/ToastContainer";

const CreateToast = () => {
	return (
		<ToastContainer toastType={TOAST_TYPE.createToast}>
			<div className="flex items-center justify-center w-80 h-16 px-3 py-5 rounded-3xl shadow-orange-500 bg-orange-300 text-white">
				타겟이 만들어졌어요
			</div>
		</ToastContainer>
	);
};

export default CreateToast;
