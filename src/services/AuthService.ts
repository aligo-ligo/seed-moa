import { AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";


import { LOCAL_STORAGE_KEY } from "../utils/constant/storage";

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
			localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, data.accessToken);
			localStorage.setItem(LOCAL_STORAGE_KEY.userId, data.user.id.toString());
			localStorage.setItem(LOCAL_STORAGE_KEY.nickName, data.user.nickName.toString());
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
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
		localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, data.accessToken);
		localStorage.setItem(LOCAL_STORAGE_KEY.userId, data.user.id.toString());
		localStorage.setItem(LOCAL_STORAGE_KEY.nickName, data.user.nickName.toString());
		return data;
	}

	logout() {
		localStorage.remove(LOCAL_STORAGE_KEY.accessToken);
		localStorage.remove(LOCAL_STORAGE_KEY.userId);
		localStorage.remove(LOCAL_STORAGE_KEY.nickName);
	}
}
