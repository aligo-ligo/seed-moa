import { AxiosInstance } from "axios";
import { TargetCreateResultType, TargetType } from "../types/TargetTypes";
import { GuestService, VoteResponseType } from "../types/GuestType";

export default class GuestServiceImpl implements GuestService {
	constructor(private httpClient: AxiosInstance) {}

	async getGuestTarget(id: string | undefined) {
		const { data } = await this.httpClient.get<TargetType>(`result?id=${id}`);
		console.log("Service", data);
		return data;
	}
	async getTargetVote({ id, success }: VoteResponseType) {
		const { data } = await this.httpClient.get<TargetCreateResultType>(
			`target/vote?id=${id}&success=${success}`
		);

		return data;
	}
}
