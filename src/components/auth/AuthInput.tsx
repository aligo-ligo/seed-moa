import React from "react";
import { ActionType, UserInfoType } from "../../types/AuthType";

interface AuthInputProps {
	placeholder: string;
	text: string;
	name: "EMAIL" | "PASSWORD" | "NICKNAME";
	userInfo: UserInfoType;
	dispatch: React.Dispatch<ActionType>;
}

export default function AuthInput({
	placeholder,
	text,
	name,
	userInfo,
	dispatch,
}: AuthInputProps) {
	const isEmail = name === "EMAIL";
	const isPassword = name === "PASSWORD";
	const isNickName = name === "NICKNAME";

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		dispatch({ type: `SET_${name}`, data: value });
	};

	const { emailValid, passwordValid, nickNameValid } = userInfo;

	let inputClass = "";
	if (isEmail) {
		inputClass = emailValid
			? "border-main"
			: "border-fail ease-in duration-1000";
	} else if (isPassword) {
		inputClass = passwordValid
			? "border-main"
			: "border-fail ease-in duration-1000";
	} else if (isNickName) {
		inputClass = nickNameValid
			? "border-main"
			: "border-fail ease-in duration-1000";
	}

	console.log("userInfoInInput", userInfo);
	return (
		<>
			<label className="text-base block mb-2 font-medium">
				{isEmail ? "이메일" : isNickName ? "닉네임" : "비밀번호"}
				<span className="sr-only">
					{isEmail ? "이메일" : isNickName ? "닉네임" : "비밀번호"}
				</span>
			</label>
			<div
				className={`flex items-center  ${inputClass} border-2 border-solid rounded-md py-2 px-4 relative`}
			>
				<input
					name={name}
					value={text}
					placeholder={placeholder}
					className="placeholder:text-xs w-full outline-none text-emerald-800"
					type={name.toLowerCase()}
					onChange={handleChange}
					required
					autoComplete="on"
				/>
			</div>
		</>
	);
}
