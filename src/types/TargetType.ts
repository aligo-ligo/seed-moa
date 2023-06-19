export type SubGoalRoutineType = React.ReactNode & {
	name: string;
	value: string;
};

export type TargetInfo = {
	goal: string;
	subGoal: SubGoalRoutineType[];
	routine: SubGoalRoutineType[];
	endDate: string;
};

export type TargetResponse = {
	statusCode: number;
};
12;

export interface TargetService {
	postTarget: (targetInfo: TargetInfo) => Promise<TargetResponse>;
}
