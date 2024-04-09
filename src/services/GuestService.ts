import { AxiosInstance } from "axios";
import {
	GuestService,
	UserAndTargetNumType,
	VoteResponseType,
} from "../types/GuestType";
import { TargetType } from "../types/TargetTypes";

export default class GuestServiceImpl implements GuestService {
	constructor(private httpClient: AxiosInstance) {}

	async getGuestTarget(id: string | undefined) {
		const { data } = await this.httpClient.get<TargetType>(`result?id=${id}`);

		return data;
	}
	async getTargetVote({ id, success }: VoteResponseType) {
		const { data } = await this.httpClient.get(
			`target/vote?id=${id}&success=${success}`
		);

		return data;
	}

	async getUserAndTargetNum() {
		const { data } = await this.httpClient.get<UserAndTargetNumType>(`/`);
		return data;
	}
}
