import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTarget } from "./useTarget";
import { PostSubGoalType } from "../types/TargetTypes";

const useModifySubGoal = (id: string | undefined) => {
	const queryClient = useQueryClient();
	const targetService = useTarget();

	const subGoalMutation = useMutation(
		async (newCheckPoint: PostSubGoalType) => {
			return targetService.postSubGoal(newCheckPoint);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["target", id]);
			},
		}
	);

	return {
		subGoalMutation,
	};
};

export { useModifySubGoal };
