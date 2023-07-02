export type TargetResponse = Promise<TargetType[]>;

export interface TargetService {
	getAllTarget: () => TargetResponse;
	getTarget: (id: string | undefined) => Promise<TargetType>;
	postTarget: (targetInfo: TargetInfoType) => Promise<TargetCreate>;
}

export interface TargetType {
	id: number;
	user_id: number;
	start_date: string;
	end_date: string;
	goal: string;
	routine: SubGoalRoutineType[];
	sub_goal: SubGoalRoutineType[];
	penalty: string;
	subgoal_total: number;
	success_count: number;
	success_vote: number;
	failure_vote: number;
	vote_total: number;
}

export type TargetStepType =
	| "goal"
	| "subGoal"
	| "duration"
	| "penalty"
	| "lastStep"
	| "done";

export type SubGoalRoutineType = React.ReactNode & {
	name: string;
	value: string;
};

export type TargetInfoType = {
	goal: string;
	subGoal: SubGoalRoutineType[];
	routine: SubGoalRoutineType[];
	endDate: string;
	penalty: string;
};

export type TargetCreate = {
	statusCode: number;
	message: string;
};
