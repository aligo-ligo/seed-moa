import * as yup from "yup";
export const QueryClientOptions = {
	defaultOptions: {
		queries: {
			staleTime: 5000,
			refetchOnWindowFocus: false,
		},
	},
};

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

export const NICKNAME_INPUT = {
	name: "NICKNAME",
	placeholder: "닉네임을 입력해주세요",
} as const;

export const validationSchema = yup.object({
	goal: yup.string().required("Required"),
	subGoal: yup.string().required("Required"),
	routine: yup.string().required("Required"),
});

// 로컬 스토리지
export const ACCESS_TOKEN = "accessToken";
export const USER_ID = "userId";
export const NICK_NAME = "userNickName";
