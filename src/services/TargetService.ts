import { AxiosInstance } from "axios";
import {
	AccountResponse,
	InfoService,
	TargetResponse,
	UserResponse,
	UserSettingResponse,
	UserSettingType,
	UserType,
} from "../types/TargetTypes";
import { TargetType } from "../types/TargetType";

export default class TargetServiceImpl implements InfoService {
	constructor(private httpClient: AxiosInstance) {
		console.log("TargetSerin", httpClient);
	}

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

	async getAllTarget() {
		const { data } = await this.httpClient.get<TargetResponse>(
			`data/allTargets.json`
		);
		return data;
	}

	async getTarget(id: string | undefined) {
		const { data } = await this.httpClient.get<TargetType>(
			`data/target/${id}.json`
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
