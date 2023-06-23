export type ActionType =
	| { type: "SET_EMAIL"; data: string }
	| { type: "SET_PASSWORD"; data: string }
	| { type: "SET_NICKNAME"; data: string };
export type ValidProperties = Pick<
	UserInfoType,
	keyof UserInfoType & `${string}Valid`
>;

export type UserInfoType =
	| {
			email: string;
			password: string;
			nickName: string;
			emailValid: boolean;
			passwordValid: boolean;
			nickNameValid: boolean;
	  }
	| ValidProperties;

export type AuthResponse = {
	accessToken: string;
	user: {
		email: string;
		nickName: number;
	};
};

export interface AuthService {
	signIn: (userInfo: UserInfoType) => Promise<AuthResponse>;
	signUp: (userInfo: UserInfoType) => Promise<AuthResponse>;
}
