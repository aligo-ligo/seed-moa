export const ValidationAuth = {
	email: "올바른 이메일 주소를 입력해주세요",
	password: "영문+숫자 조합 8자리 이상 입력해주세요",
	nickName: "3~10자로 입력해주세요",
	submit: "존재하지 않는 계정이에요",
};

export const EMAIL_INPUT = {
	name: "EMAIL",
	placeholder: "example@aligo.com",
} as const;

export const PASSWORD_INPUT = {
	name: "PASSWORD",
	placeholder: "영문+숫자 조합 8자리 이상 입력해주세요",
} as const;

export const PASSWORD_VISIBLE_INPUT = {
	name: "TEXT",
	placeholder: "비밀번호를 볼 수 있어요",
} as const;

export const NICKNAME_INPUT = {
	name: "NICKNAME",
	placeholder: "닉네임을 입력해주세요",
} as const;
// auth url
export const SIGN_IN_URL = "/signin";
export const SIGN_UP_URL = "/signup";

