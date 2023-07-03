export type TargetResponse = Promise<TargetType[]>;

export interface TargetService {
	getAllTarget: () => TargetResponse;
	getTarget: (id: string | undefined) => Promise<TargetType>;
	postTarget: (targetInfo: TargetInfoType) => Promise<TargetCreate>;
}

export interface TargetType {
	id: number;
	userId: number;
	startDate: string;
	endDate: string;
	goal: string;
	routine: SubGoalType[];
	subGoal: RoutineType[];
	penalty: string;
	subGoalTotal: number;
	successCount: number;
	successVote: number;
	failureVote: number;
	voteTotal: number;
}

export type TargetStepType =
	| "goal"
	| "subGoal"
	| "duration"
	| "penalty"
	| "lastStep"
	| "done";

export type SubGoalType = React.ReactNode & {
	id: number;
	value: string;
};

export type RoutineType = React.ReactNode & {
	id: number;
	value: string;
	success: boolean;
	completeDate: string | null;
};

export type TargetInfoType = {
	goal: string;
	subGoal: SubGoalType[];
	routine: RoutineType[];
	endDate: string;
	penalty: string;
};

export type TargetCreate = {
	statusCode: number;
	message: string;
};
