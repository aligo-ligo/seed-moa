import { TargetType } from "./TargetType";

export type UserType = {
	id: number;
	uuid: string;
	photo: string;
	name: string;
	email: string;
	age: number;
	gender_origin: number;
	birth_date: string;
	phone_number: string;
	address: string;
	detail_address: string;
	last_login: string;
	created_at: string;
	updated_at: string;
	password?: string;
};

export type AccountType = {
	id: number;
	user_id: number;
	uuid: string;
	broker_id: string;
	status: number;
	number: string;
	name: string;
	assets: string;
	payments: string;
	is_active: boolean;
	created_at: string;
	updated_at: string;
};

export type UserSettingType = {
	id: number;
	uuid: string;
	allow_marketing_push: boolean;
	allow_invest_push: boolean;
	is_active: boolean;
	is_staff: boolean;
	created_at: string;
	updated_at: string;
};

export type UserResponse = Promise<UserType[]>;
export type TargetResponse = Promise<TargetType[]>;
export type AccountResponse = Promise<AccountType[]>;
export type UserSettingResponse = Promise<UserSettingType[]>;

export interface InfoService {
	getUsers: (page?: string) => UserResponse;
	getUserSetting: (page?: string) => UserSettingResponse;
	getAccounts: (page?: string) => AccountResponse;
	getAllUsers: () => UserResponse;
	getAllAccounts: () => AccountResponse;
	getAllUserSetting: () => UserSettingResponse;
	getAllTarget: () => TargetResponse;
	getTarget: (id: string | undefined) => Promise<TargetType>;
	getTargetUserSetting: (q?: string) => UserSettingResponse;
	getTargetAccount: (q?: string) => AccountResponse;
	deleteUser: (id: string) => Promise<unknown>;
	deleteUserSetting: (id: string) => void;
	patchUserName: ({ name, id }: { name: string; id: string }) => void;
	postUser: (user: UserType) => void;
	postSetting: (setting: UserSettingType) => void;
}

export type UserTableType = {
	id: number;
	name: string;
	account_count: number;
	email: string;
	gender_origin: number;
	birth_date: string;
	phone_number: string;
	last_login: string;
	allow_marketing_push: string;
	is_active: string;
	created_at: string;
	is_staff: string;
	uuid: string;
	kind: "user";
};

export type AccountTableType = {
	user_name: string;
	broker_name: string;
	number: string;
	status: string;
	name: string;
	assets: string;
	payments: string;
	is_active: string;
	created_at: string;
	id: string;
	kind: "account";
	userId: number;
	profit: "up" | "down" | "equal";
};

export type OptionType = {
	name: string;
	value: string;
	text: string;
};

export type SelectType = OptionType[];
