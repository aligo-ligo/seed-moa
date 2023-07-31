import { useReducer, useState } from "react";
import { ActionType, UserInfoType } from "../../types/AuthType";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthInput from "./AuthInput";
import Warnning from "./Warning";
import { useAuthService } from "../../hooks/useAuth";

import {
	EMAIL_INPUT,
	NICKNAME_INPUT,
	PASSWORD_INPUT,
	PASSWORD_VISIBLE_INPUT,
	ValidationAuth,
} from "../../utils/constant/auth";

import { LogoImage } from "../../utils/constant/image";

import Validation from "./Validation";
import StyledButton from "../common/StyledButton";

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
			const passwordValid = password.length >= 8;
			return { ...state, password, passwordValid };
		}
		case ACTION_CONST.SET_NICKNAME: {
			const nickName = action.data;
			const nickNameValid = nickName.length >= 3 && nickName.length < 11;
			return { ...state, nickName, nickNameValid };
		}
		default:
			throw new Error("Unknown Action");
	}
};

const initialState: UserInfoType = {
	email: "",
	password: "",
	nickName: "",
	emailValid: true,
	passwordValid: true,
	nickNameValid: true,
};
interface AuthFormProps {
	name: string;
	isLogin: boolean;
	url: string;
}

export default function AuthForm({ name, isLogin, url }: AuthFormProps) {
	const [message, setMessage] = useState("");
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const [userInfo, dispatch] = useReducer(authReducer, initialState);
	const { emailValid, passwordValid, nickNameValid } = userInfo;
	const authService = useAuthService();
	const navigate = useNavigate();

	const updateIsPassWordShown = () => {
		setIsPasswordShown((prev) => !prev);
	};

	const isActive = isLogin
		? !emailValid || !passwordValid
		: !emailValid || !passwordValid || !nickNameValid;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLogin) {
			authService
				?.signIn(userInfo)
				.then((data) => {
					if ("accessToken" in data) {
						navigate("/target");
					}
				})
				.catch((error) => setMessage(error.signInMessage));
		} else {
			authService
				?.signUp(userInfo)
				.then((data) => {
					if ("accessToken" in data) {
						navigate("/target");
					}
				})
				.catch((error) => setMessage(error.signUpMessage));
		}
	};

	return (
		<>
			<div className="flex flex-col  items-center mb-8 p-3 gap-10">
				<img src={LogoImage} alt="로고" className="w-4/5 pointer-events-none" />
			</div>
			<form
				action="submit"
				onSubmit={handleSubmit}
				className="flex flex-col w-3/4 desktop:w-2/3 bg-white rounded-md"
			>
				<section className="w-full">
					<div className="mb-8">
						<AuthInput
							name={EMAIL_INPUT.name}
							text={userInfo.email}
							placeholder={EMAIL_INPUT.placeholder}
							userInfo={userInfo}
							dispatch={dispatch}
						/>
						{!emailValid && <Validation>{ValidationAuth.email}</Validation>}
					</div>
					<div className="mb-8">
						<AuthInput
							name={
								isPasswordShown
									? PASSWORD_VISIBLE_INPUT.name
									: PASSWORD_INPUT.name
							}
							text={userInfo.password}
							placeholder={PASSWORD_INPUT.placeholder}
							userInfo={userInfo}
							dispatch={dispatch}
							isPasswordShown={isPasswordShown}
							updateIsPassWordShown={updateIsPassWordShown}
						/>
						{!passwordValid && (
							<Validation>{ValidationAuth.password}</Validation>
						)}
					</div>
					{!isLogin && (
						<div className="mb-8">
							<AuthInput
								name={NICKNAME_INPUT.name}
								text={userInfo.nickName}
								placeholder={NICKNAME_INPUT.placeholder}
								userInfo={userInfo}
								dispatch={dispatch}
							/>
							{!nickNameValid && (
								<Validation>{ValidationAuth.nickName}</Validation>
							)}
						</div>
					)}
					<StyledButton styleName="login" type="submit" disable={isActive}>
						{name}
					</StyledButton>
				</section>
				<StyledButton
					styleName="signInAndUp"
					type="button"
					onClick={() => navigate(url)}
				>
					{isLogin ? "회원가입" : "로그인"}하러 가기
				</StyledButton>

				<Link
					to={url}
					className="text-sm text-mainHover self-center mt-8 hover:text-main ease-in duration-100"
				></Link>
				{message && <Warnning message={message} />}
			</form>
		</>
	);
}
