import { AxiosInstance } from "axios";
import {
	CreateTargetResponse,
	PostResultType,
	PostSubGoalType,
	TargetInfoType,
	TargetResponse,
	TargetService,
	TargetType,
} from "../types/TargetTypes";

export default class TargetServiceImpl implements TargetService {
	constructor(private httpClient: AxiosInstance) {}

	// useGetAllTargets 리팩토링 
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
		const { data } = await this.httpClient.post<CreateTargetResponse>(
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
