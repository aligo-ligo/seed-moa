import React from "react";
import { ActionType } from "../types/AuthType";

interface AuthInputProps {
	placeholder: string;
	text: string;
	name: "EMAIL" | "PASSWORD" | "NICKNAME";
	dispatch: React.Dispatch<ActionType>;
}

export default function AuthInput({
	placeholder,
	text,
	name,
	dispatch,
}: AuthInputProps) {
	const isEmail = name === "EMAIL";
	const isNickName = name === "NICKNAME";

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		dispatch({ type: `SET_${name}`, data: value });
	};
	return (
		<>
			<label className="text-base block mb-2 font-bold">
				{isEmail ? "이메일" : isNickName ? "닉네임" : "비밀번호"}
				<span className="sr-only">
					{isEmail ? "이메일" : isNickName ? "닉네임" : "비밀번호"}
				</span>
			</label>
			<div className="flex items-center mb-8 border-main border-2 border-solid rounded-md py-2 px-4 relative">
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
