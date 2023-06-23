import { AxiosError, AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";

export default class AuthServiceImpl implements AuthService {
	constructor(private httpClient: AxiosInstance) {}

	async signUp({ email, password, nickName }: UserInfoType) {
		console.log("Signup 서버로 가는 인자", email, password, nickName);
		const response = await this.httpClient.post<AuthResponse>("users/signup", {
			email,
			password,
			nickName,
		});
		const { data } = response;
		console.log("signup", data);
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		console.log("SignIn 서버로 가는 인자", email, password);
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
		console.log("signin", typeof data);
		return data;
	}
}
