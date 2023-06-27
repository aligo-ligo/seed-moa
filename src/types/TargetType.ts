export interface TargetType {
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
};

// export type TargetResponse = {
// 	statusCode: number;
// };

// export interface TargetService {
// 	postTarget: (targetInfo: TargetInfo) => Promise<TargetResponse>;
// }
