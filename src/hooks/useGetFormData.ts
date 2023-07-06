import { useFormContext } from "react-hook-form";
import { RoutineType, SubGoalType } from "../types/TargetTypes";

export const useGetFormData = () => {
	const { getValues } = useFormContext();
	const getGoal: string = getValues("goal");
	const getSubGoal: SubGoalType[] = getValues("subGoal");
	const getRoutine: RoutineType[] = getValues("routine");
	const getEndDate: string = getValues("endDate");
	const getPenalty: string = getValues("penalty");

	return { getGoal, getSubGoal, getRoutine, getEndDate, getPenalty };
};
