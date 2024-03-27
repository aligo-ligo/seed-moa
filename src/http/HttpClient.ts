import axios, { AxiosError, AxiosInstance } from "axios";
import { LOCAL_STORAGE_KEY } from "../utils/constant/storage";
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
							localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
							localStorage.removeItem(LOCAL_STORAGE_KEY.userId);
							localStorage.removeItem(LOCAL_STORAGE_KEY.nickName);
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
			const token = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
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
