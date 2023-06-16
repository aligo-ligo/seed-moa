export const QueryClientOptions = {
	defaultOptions: {
		queries: {
			staleTime: 5000,
		},
	},
};

export const EMAIL_INPUT = {
	name: "EMAIL",
	placeholder: "@포함 세글자 이상 이메일을 입력해주세요",
} as const;

export const PASSWORD_INPUT = {
	name: "PASSWORD",
	placeholder: "세글자 이상의 비밀번호를 입력해주세요",
} as const;

export const NICKNAME_INPUT = {
	name: "NICKNAME",
	placeholder: "한글 3자이상 닉네임을 작성해주세요",
} as const;
