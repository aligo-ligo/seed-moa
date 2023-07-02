import { useFormContext } from "react-hook-form";
import { SubGoalRoutineType } from "../types/TargetTypes";

export const useGetFormData = () => {
	const { getValues } = useFormContext();
	const getGoal: string = getValues("goal");
	const getSubGoal: SubGoalRoutineType[] = getValues("subGoal");
	const getRoutine: SubGoalRoutineType[] = getValues("routine");
	const endDate: string = getValues("endDate");

	return { getGoal, getSubGoal, getRoutine, endDate };
};
