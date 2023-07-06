import { AxiosInstance } from "axios";
import {
	PostResultType,
	TargetCreateResultType,
	TargetInfoType,
	TargetResponse,
	TargetService,
	TargetType,
	subGoalUpdateType,
} from "../types/TargetTypes";

export default class TargetServiceImpl implements TargetService {
	constructor(private httpClient: AxiosInstance) {}

	async getAllTarget() {
		const { data } = await this.httpClient.get<TargetResponse>(`target/list`);
		console.log("target", data);
		return data;
	}

	// async getAllTarget() {
	// 	const { data } = await this.httpClient.get<TargetResponse>(
	// 		`data/allTargets.json`
	// 	);
	// 	return data;
	// }

	async getTarget(id: string | undefined) {
		const { data } = await this.httpClient.get<TargetType>(
			`target/detail?id=${id}`
		);

		return data;
	}

	async postTarget({
		goal,
		subGoal,
		routine,
		endDate,
		penalty,
	}: TargetInfoType) {
		const { data } = await this.httpClient.post<TargetCreateResultType>(
			"target/create",
			{
				goal,
				subGoal,
				routine,
				endDate,
				penalty,
			}
		);
		return data;
	}

	// async getTarget(id: string | undefined) {
	// 	const { data } = await this.httpClient.get<TargetType>(
	// 		`data/target/${id}.json`
	// 	);
	// 	return data;
	// }
	async updateSubGoal({ id, value, completeDate }: subGoalUpdateType) {
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

	async post({ id, value, completeDate }: subGoalUpdateType) {
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
