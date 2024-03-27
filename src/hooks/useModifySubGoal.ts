import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PostSubGoalType } from "../types/TargetTypes";
import { TARGET_KEY } from "../utils/constant/queryKeyConstants";
import { useTarget } from "./useTarget";

const useModifySubGoal = (id: string | undefined) => {
	const queryClient = useQueryClient();
	const targetService = useTarget();

	const subGoalMutation = useMutation(
		async (newCheckPoint: PostSubGoalType) => {
			return targetService.postSubGoal(newCheckPoint);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([TARGET_KEY, id]);
			},
		}
	);

	return {
		subGoalMutation,
	};
};

export { useModifySubGoal };
