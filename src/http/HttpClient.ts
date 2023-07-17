import axios, { AxiosError, AxiosInstance } from "axios";
import HTTPError from "./HttpError";
import { TokenRepository } from "../repository/tokenRepository";
import { ACCESS_TOKEN, NICK_NAME, USER_ID } from "../utils/constant/auth";

export default class HttpClient {
	httpClient: AxiosInstance;
	tokenRepository: TokenRepository;

	constructor(private baseUrl: string, tokenRepository: TokenRepository) {
		this.httpClient = axios.create({
			baseURL: this.baseUrl,
		});

		this.httpClient.interceptors.response.use(
			(response) => response,
			(error) => {
				// 통신 에러 전역 핸들러에서 logging 처리
				console.log("interceptError", error);
				if (error instanceof AxiosError) {
					const { response } = error;
					if (response) {
						const { status } = response;
						if (status === 401) {
							this.tokenRepository.remove(ACCESS_TOKEN);
							this.tokenRepository.remove(USER_ID);
							this.tokenRepository.remove(NICK_NAME);
							window.location.replace("/signin");
						} else {
							throw new HTTPError(
								response?.status,
								response?.statusText,
								response.data
							);
						}
					}
				}
				throw new Error("Server Error");
			}
		);

		this.tokenRepository = tokenRepository;
	}

	withToken() {
		this.httpClient.interceptors.request.use((config) => {
			const token = this.tokenRepository.get(ACCESS_TOKEN);
			console.log("in WIthToken", token);
			if (config.headers && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		});

		return this.httpClient;
	}

	withoutToken() {
		this.httpClient.interceptors.request.use((config) => {
			config.headers.Authorization = "";
			console.log("in withoutToken", config);
			return config;
		});

		return this.httpClient;
	}
}
