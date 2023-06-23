import axios, { AxiosError, AxiosInstance } from "axios";
import HTTPError from "./HttpError";

const ACCESS_TOKEN = "accessToken";
const USER_ID = "userId";
export default class HttpClient {
	httpClient: AxiosInstance;

	constructor(private baseUrl: string) {
		this.httpClient = axios.create({
			baseURL: this.baseUrl,
		});

		this.httpClient.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error instanceof AxiosError) {
					const { response } = error;
					if (response) {
						const { status } = response;
						if (status === 401) {
							localStorage.removeItem(ACCESS_TOKEN);
							localStorage.removeItem(USER_ID);
							window.location.replace("/login");
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
			const token = localStorage.getItem(ACCESS_TOKEN);
			console.log("t", token);
			if (config.headers && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});
		console.log("return 전", this.httpClient);
		return this.httpClient;
	}
}
