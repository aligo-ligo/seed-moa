import { AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";
import { TokenRepository } from "../repository/tokenRepository";
import { ACCESS_TOKEN, NICK_NAME, USER_ID } from "../utils/contants";

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
		this.tokenRepository.save(ACCESS_TOKEN, data.accessToken);
		this.tokenRepository.save(USER_ID, data.user.id.toString());
		this.tokenRepository.save(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		console.log("SignIn 서버로 가는 인자", email, password);
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
		this.tokenRepository.save(ACCESS_TOKEN, data.accessToken);
		this.tokenRepository.save(USER_ID, data.user.id.toString());
		this.tokenRepository.save(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	logout() {
		this.tokenRepository.remove(ACCESS_TOKEN);
	}
}
