import { AxiosError, AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";
import { TokenRepository } from "../repository/tokenRepository";

export default class AuthServiceImpl implements AuthService {
	tokenRepository: TokenRepository;

	constructor(
		private httpClient: AxiosInstance,
		tokenRepository: TokenRepository
	) {
		this.tokenRepository = tokenRepository;
	}

	async signUp({ email, password, nickName }: UserInfoType) {
		console.log("Signup 서버로 가는 인자", email, password, nickName);
		const response = await this.httpClient.post<AuthResponse>("users/signup", {
			email,
			password,
			nickName,
		});
		const { data } = response;
		this.tokenRepository.save(data.accessToken);
		console.log(this.tokenRepository.get());
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		console.log("SignIn 서버로 가는 인자", email, password);
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
		this.tokenRepository.save(data.accessToken);
		console.log(this.tokenRepository.get());
		return data;
	}

	logout() {
		this.tokenRepository.remove();
	}
}
