import axios, { AxiosError, AxiosInstance } from "axios";

import STORAGE_KEYS from "@/constants/storageKeys";
import HTTPError from "./HttpError";


export default class HttpClient {
	httpClient: AxiosInstance;


	constructor(private baseUrl: string) {
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
							localStorage.removeItem(STORAGE_KEYS.accessToken);
							localStorage.removeItem(STORAGE_KEYS.userId);
							localStorage.removeItem(STORAGE_KEYS.nickName);
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

	}

	withToken() {
		this.httpClient.interceptors.request.use((config) => {
			const token = localStorage.getItem(STORAGE_KEYS.accessToken);
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
