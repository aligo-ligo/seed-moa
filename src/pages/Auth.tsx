import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import { FiArrowLeft } from "react-icons/fi";

const SIGN_IN_URL = "/signin";
const SIGN_UP_URL = "/signup";

const Auth = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

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
		</section>
	);
};

export default Auth;
