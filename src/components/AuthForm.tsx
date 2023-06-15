import { useReducer, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ActionType, UserInfoType } from "../types/AuthType";
import { useAuthService } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";

const ACTION_CONST = {
	SET_EMAIL: "SET_EMAIL",
	SET_PASSWORD: "SET_PASSWORD",
} as const;

const authReducer = (state: UserInfoType, action: ActionType) => {
	switch (action.type) {
		case ACTION_CONST.SET_EMAIL: {
			const email = action.data;
			const emailValid = email.includes("@") && email.length >= 3;

			return { ...state, email, emailValid };
		}
		case ACTION_CONST.SET_PASSWORD: {
			const password = action.data;
			const passwordValid = password.length >= 4;
			return { ...state, password, passwordValid };
		}
		default:
			throw new Error("Unknown Action");
	}
};

const EMAIL_INPUT = {
	name: "EMAIL",
	placeholder: "@포함 세글자 이상 이메일을 입력해주세요",
} as const;

const PASSWORD_INPUT = {
	name: "PASSWORD",
	placeholder: "세글자 이상의 비밀번호를 입력해주세요",
} as const;

const initialState: UserInfoType = {
	email: "",
	password: "",
	emailValid: false,
	passwordValid: false,
};
interface AuthFormProps {
	name: string;
	isLogin: boolean;
	url: string;
}

export default function AuthForm({ name, isLogin, url }: AuthFormProps) {
	const [message, setMessage] = useState("");
	const [userInfo, dispatch] = useReducer(authReducer, initialState);
	console.log(userInfo);
	const authService = useAuthService();
	const navigate = useNavigate();
	const router = useLocation();
	const isActive = !userInfo.emailValid || !userInfo.passwordValid;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLogin) {
			authService
				?.signIn(userInfo)
				.then((data) => {
					if ("accessToken" in data) {
						localStorage.setItem("accessToken", data.accessToken);
						localStorage.setItem("userId", data.user.nickName.toString());
						navigate("/target");
					}
				})
				.catch((error) => setMessage(error.signInMessage));
		} else {
			authService
				?.signUp(userInfo)
				.then((data) => {
					if ("accessToken" in data) {
						setMessage("성공했습니다");
						navigate("signin");
					}
				})
				.catch((error) => setMessage(error.signUpMessage));
		}
	};
	return (
		<form
			action="submit"
			onSubmit={handleSubmit}
			className="h-1/2 flex flex-col w-2/3 bg-white rounded-xl overflow-hidden relative"
		>
			<header className="flex h-1/5 justify-start bg-slate-100 text-indigo-300 items-center mb-8 w-full p-3">
				<div className="text-xl mr-2">{/* <AiOutlineUser /> */}</div>
				<span className="text-xl">{name}</span>
			</header>
			<section className="px-5">
				<AuthInput
					name={EMAIL_INPUT.name}
					text={userInfo.email}
					placeholder={EMAIL_INPUT.placeholder}
					dispatch={dispatch}
				/>
				<AuthInput
					name={PASSWORD_INPUT.name}
					text={userInfo.password}
					placeholder={PASSWORD_INPUT.placeholder}
					dispatch={dispatch}
				/>
				<button
					className={`w-full text-xl ${
						isActive ? "bg-indigo-100" : "bg-indigo-500"
					}  px-10 py-2 text-white rounded-xl `}
					type="submit"
					disabled={isActive}
				>
					{name}
				</button>
			</section>
			<Link to={url} className="text-sm text-indigo-500 self-center mt-4">
				<span>{isLogin ? "회원가입" : "로그인"}하러 가기</span>
			</Link>
			{/* {message && <Banner message={message} />}  */}
		</form>
	);
}
