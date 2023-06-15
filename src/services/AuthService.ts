import { AxiosError, AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";

export default class AuthServiceImpl implements AuthService {
	constructor(private httpClient: AxiosInstance) {}

	async signUp({ email, password }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("미정", {
			email,
			password,
		});
		const { data } = response;
		return data;
	}

	async signIn(userInfo: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("미정", userInfo);
		const { data } = response;
		return data;
	}
}
