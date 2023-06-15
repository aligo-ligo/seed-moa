export type ActionType =
	| { type: "SET_EMAIL"; data: string }
	| { type: "SET_PASSWORD"; data: string };

export type UserInfoType = {
	email: string;
	password: string;
	emailValid: boolean;
	passwordValid: boolean;
};

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
