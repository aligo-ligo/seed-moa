import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTarget } from "./useTarget";
import { PostSubGoalType } from "../types/TargetTypes";
import { TARGET_KEY } from "../utils/constant/queryKeyConstants";

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
