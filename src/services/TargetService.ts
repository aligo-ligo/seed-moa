import { AxiosInstance } from "axios";
import {
	PostResultType,
	PostSubGoalType,
	TargetCreateResultType,
	TargetInfoType,
	TargetResponse,
	TargetService,
	TargetType,
} from "../types/TargetTypes";

export default class TargetServiceImpl implements TargetService {
	constructor(private httpClient: AxiosInstance) {}

	async getAllTarget() {
		const { data } = await this.httpClient.get<TargetResponse>(`target/list`);
		return data;
	}

	async getTarget(id: string | undefined) {
		const { data } = await this.httpClient.get<TargetType>(
			`target/detail?id=${id}`
		);

		return data;
	}

	async postTarget({ goal, subGoal, routine, endDate }: TargetInfoType) {
		const { data } = await this.httpClient.post<TargetCreateResultType>(
			"target/create",
			{
				goal,
				subGoal,
				routine,
				endDate,
			}
		);
		return data;
	}

	async postSubGoal({ id, value, completeDate }: PostSubGoalType) {
		const { data } = await this.httpClient.post<PostResultType>(
			`target/update`,
			{
				id,
				value,
				completeDate,
			}
		);
		return data;
	}
}
