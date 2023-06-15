import React from "react";
import { ActionType } from "../types/AuthType";

interface AuthInputProps {
	placeholder: string;
	text: string;
	name: "EMAIL" | "PASSWORD";
	dispatch: React.Dispatch<ActionType>;
}

export default function AuthInput({
	placeholder,
	text,
	name,
	dispatch,
}: AuthInputProps) {
	const isEmail = name === "EMAIL";
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		dispatch({ type: `SET_${name}`, data: value });
	};
	return (
		<div className="flex items-center mb-4  border-indigo-100 border-2 border-solid py-1 px-4">
			<div className="text-2xl text-indigo-300 mr-3">
				{isEmail ? "email" : "password"}
			</div>
			<input
				name={name}
				value={text}
				placeholder={placeholder}
				className="placeholder:text-xs w-full outline-none text-indigo-400"
				type={name.toLowerCase()}
				onChange={handleChange}
				required
			/>
		</div>
	);
}
