import { useFormContext } from "react-hook-form";

export const useGetFormData = () => {
	const { getValues } = useFormContext();
	const getGoal = getValues("goal");
	const getSubGoal = getValues("subGoal");
	const getRoutine = getValues("routine");
	const endDate = getValues("endDate");

	return { getGoal, getSubGoal, getRoutine, endDate };
};
