import { AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";

import { ACCESS_TOKEN, NICK_NAME, USER_ID } from "../utils/constant/auth";

export default class AuthServiceImpl implements AuthService {


	constructor(
		private httpClient: AxiosInstance,
	) {
	}

	async signUp({ email, password, nickName }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("users/signup", {
			email,
			password,
			nickName,
		});
		const { data } = response;
			localStorage.setItem(ACCESS_TOKEN, data.accessToken);
			localStorage.setItem(USER_ID, data.user.id.toString());
			localStorage.setItem(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
			localStorage.setItem(ACCESS_TOKEN, data.accessToken);
			localStorage.setItem(USER_ID, data.user.id.toString());
			localStorage.setItem(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	async kakaoSignin(code: string | null) {
		const response = await this.httpClient.get<AuthResponse>(
			`users/kakao?code=${code}`,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
				},
			}
		);

		const { data } = response;
		localStorage.setItem(ACCESS_TOKEN, data.accessToken);
		localStorage.setItem(USER_ID, data.user.id.toString());
		localStorage.setItem(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	logout() {
		localStorage.remove(ACCESS_TOKEN);
		localStorage.remove(NICK_NAME);
		localStorage.remove(USER_ID);
	}
}
