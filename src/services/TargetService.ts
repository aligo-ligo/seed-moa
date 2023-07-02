import { AxiosInstance } from "axios";
import {
	TargetCreate,
	TargetInfoType,
	TargetResponse,
	TargetService,
	TargetType,
} from "../types/TargetTypes";

export default class TargetServiceImpl implements TargetService {
	constructor(private httpClient: AxiosInstance) {}

	// async getAllTarget() {
	// 	const { data } = await this.httpClient.get<TargetResponse>(`target/list`);
	// 	return data;
	// }

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

	async postTarget({
		goal,
		subGoal,
		routine,
		endDate,
		penalty,
	}: TargetInfoType) {
		const { data } = await this.httpClient.post<TargetCreate>("target/create", {
			goal,
			subGoal,
			routine,
			endDate,
			penalty,
		});
		return data;
	}
}
