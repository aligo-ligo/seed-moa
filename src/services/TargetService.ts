import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import {
	AccountResponse,
	InfoService,
	UserResponse,
	UserSettingResponse,
	UserSettingType,
	UserType,
} from "../types/TargetTypes";

export default class InfoServiceImpl implements InfoService {
	constructor(private httpClient: AxiosInstance) {}

	async getUsers(page?: string) {
		const { data } = await this.httpClient.get<UserResponse>(
			`api/users?_page=${page}&_limit=15`
		);
		return data;
	}

	async getUserSetting(page?: string) {
		const { data } = await this.httpClient.get<UserSettingResponse>(
			`api/userSetting?_page=${page}&_limit=15`
		);
		return data;
	}

	async getAccounts(page?: string) {
		const { data } = await this.httpClient.get<AccountResponse>(
			`api/accounts?_page=${page}&_limit=15`
		);
		return data;
	}

	async getAllUsers() {
		const { data } = await this.httpClient.get<UserResponse>(`api/users`);
		return data;
	}

	async getAllAccounts() {
		const { data } = await this.httpClient.get<AccountResponse>(`api/accounts`);
		return data;
	}

	async getAllUserSetting() {
		const { data } = await this.httpClient.get<UserSettingResponse>(
			`api/userSetting`
		);
		return data;
	}

	async getTargetUser(q?: string) {
		const { data } = await this.httpClient.get<UserResponse>(
			`api/users?q=${q}`
		);
		return data;
	}

	async getTargetAccount(q?: string) {
		const { data } = await this.httpClient.get<AccountResponse>(
			`api/accounts?q=${q}`
		);
		return data;
	}

	async getTargetUserSetting(q?: string) {
		const { data } = await this.httpClient.get<UserSettingResponse>(
			`api/userSetting?q=${q}`
		);
		return data;
	}

	async patchUserName({ name, id }: { name: string; id: string }) {
		return this.httpClient.patch(`api/users/${id}`, {
			name,
		});
	}

	async deleteUser(id: string) {
		return this.httpClient.delete(`api/users/${id}`);
	}

	async deleteUserSetting(id: string) {
		return this.httpClient.delete(`api/userSetting/${id}`);
	}

	async postUser(user: UserType) {
		return this.httpClient.post(`api/users`, user);
	}

	async postSetting(setting: UserSettingType) {
		return this.httpClient.post(`api/userSetting`, setting);
	}
}
