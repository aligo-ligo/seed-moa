import { useReducer, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ActionType, UserInfoType } from "../types/AuthType";
import { useAuthService } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import Warnning from "./Warning";

const ACTION_CONST = {
	SET_EMAIL: "SET_EMAIL",
	SET_PASSWORD: "SET_PASSWORD",
	SET_NICKNAME: "SET_NICKNAME",
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
		case ACTION_CONST.SET_NICKNAME: {
			const nickName = action.data;
			const nickNameValid = nickName.length >= 3;
			return { ...state, nickName, nickNameValid };
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

const NICKNAME_INPUT = {
	name: "NICKNAME",
	placeholder: "한글 3자이상 닉네임을 작성해주세요",
} as const;

const initialState: UserInfoType = {
	email: "",
	password: "",
	nickName: "",
	emailValid: false,
	passwordValid: false,
	nickNameValid: false,
};
interface AuthFormProps {
	name: string;
	isLogin: boolean;
	url: string;
}

export default function AuthForm({ name, isLogin, url }: AuthFormProps) {
	const [message, setMessage] = useState("");
	console.log(message);
	const [userInfo, dispatch] = useReducer(authReducer, initialState);
	const authService = useAuthService();
	const navigate = useNavigate();
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
		<>
			<div className="flex text-main items-center mb-8 p-3">
				<h1 className=" text-4xl">{name}</h1>
			</div>
			<form
				action="submit"
				onSubmit={handleSubmit}
				className="flex flex-col w-2/3 bg-white rounded-md"
			>
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
					{!isLogin && (
						<AuthInput
							name={NICKNAME_INPUT.name}
							text={userInfo.nickName}
							placeholder={NICKNAME_INPUT.placeholder}
							dispatch={dispatch}
						/>
					)}
					<button
						className={`w-full text-xl ${
							isActive ? "bg-mainHover" : "bg-main"
						}  px-10 py-2 mt-4 text-white rounded-xl `}
						type="submit"
						disabled={isActive}
					>
						{name}
					</button>
				</section>
				<Link to={url} className="text-sm text-mainHover self-center mt-8">
					<span>{isLogin ? "회원가입" : "로그인"}하러 가기</span>
				</Link>
				{message && <Warnning message={message} />}
			</form>
		</>
	);
}
