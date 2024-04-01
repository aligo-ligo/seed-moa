import { AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import STORAGE_KEYS from "@/constants/storageKeys";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";




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
			localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
			localStorage.setItem(STORAGE_KEYS.userId, data.user.id.toString());
			localStorage.setItem(STORAGE_KEYS.nickName, data.user.nickName.toString());
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
		localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
		localStorage.setItem(STORAGE_KEYS.userId, data.user.id.toString());
		localStorage.setItem(STORAGE_KEYS.nickName, data.user.nickName.toString());
		return data;
	}

	logout() {
		localStorage.remove(STORAGE_KEYS.accessToken);
		localStorage.remove(STORAGE_KEYS.userId);
		localStorage.remove(STORAGE_KEYS.nickName);
	}
}
