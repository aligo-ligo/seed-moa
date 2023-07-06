import axios, { AxiosError, AxiosInstance } from "axios";
import HTTPError from "./HttpError";
import { TokenRepository } from "../repository/tokenRepository";
import { ACCESS_TOKEN, USER_ID } from "../utils/contants";

export default class HttpClient {
	httpClient: AxiosInstance;
	tokenRepository: TokenRepository;

	constructor(private baseUrl: string, tokenRepository: TokenRepository) {
		this.httpClient = axios.create({
			baseURL: this.baseUrl,
		});

		console.log("테스트", this.httpClient);

		this.httpClient.interceptors.response.use(
			(response) => response,
			(error) => {
				console.log("interceptError", error);
				if (error instanceof AxiosError) {
					const { response } = error;
					if (response) {
						const { status } = response;
						if (status === 401) {
							this.tokenRepository.remove(ACCESS_TOKEN);
							this.tokenRepository.remove(USER_ID);
							// window.location.replace("/signin");
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
			console.log("t", token);
			if (config.headers && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		});

		return this.httpClient;
	}

	withGuest() {
		this.httpClient.interceptors.request.use((config) => {
			config.headers.Authorization = "";
			console.log("요청 가로채기전", config);
			return config;
		});

		return this.httpClient;
	}
}
