import { AxiosError, AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";

export default class AuthServiceImpl implements AuthService {
	constructor(private httpClient: AxiosInstance) {}

	async signUp({ email, password, nickName }: UserInfoType) {
		console.log(
			"서비스 계층에서 들어온 SIGNUP 인자",
			email,
			password,
			nickName
		);
		const response = await this.httpClient.post<AuthResponse>("미정", {
			email,
			password,
			nickName,
		});
		const { data } = response;
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		console.log("서비스 계층에서 들어온 SIGNIN 인자", email, password);
		const response = await this.httpClient.post<AuthResponse>("미정", {
			email,
			password,
		});
		const { data } = response;
		return data;
	}
}
