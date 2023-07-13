import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import { FiArrowLeft } from "react-icons/fi";
import { createPortal } from "react-dom";
import ModalContent from "../components/common/ModalContent";
import usePopUp from "../hooks/usePopUp";
import { SIGN_IN_URL, SIGN_UP_URL } from "../utils/constant/contants";

const Auth = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { closeModal, outside } = usePopUp();
	const nickName = localStorage.getItem("userNickName");

	const isLogin = pathname === SIGN_IN_URL;

	return (
		<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden relative">
			<FiArrowLeft
				className="absolute left-0 top-0 text-main text-5xl my-10 mx-6"
				onClick={() => {
					navigate("/");
				}}
			/>
			<AuthForm
				name={isLogin ? "로그인" : "회원가입"}
				isLogin={isLogin}
				url={isLogin ? SIGN_UP_URL : SIGN_IN_URL}
			/>

			{!!nickName &&
				createPortal(
					<ModalContent
						closeModal={closeModal}
						buttonModalType="auth"
						outside={outside}
					/>,
					document.body
				)}
		</section>
	);
};

export default Auth;
