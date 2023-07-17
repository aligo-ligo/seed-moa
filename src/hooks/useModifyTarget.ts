import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTarget } from "./useTarget";
import { PostSubGoalType } from "../types/TargetTypes";
import { GUEST_KEY, TARGET_KEY } from "../utils/constant/queryKeyConstants";
import { useGuest } from "./useGuest";
import { VoteResponseType } from "../types/GuestType";

const useModifyTarget = (id: string | undefined) => {
	const queryClient = useQueryClient();
	const targetService = useTarget();
	const guestService = useGuest();

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

	const voteMutation = useMutation(
		async (voteInfo: VoteResponseType) => {
			return guestService.getTargetVote(voteInfo);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([GUEST_KEY, id]);
			},
		}
	);

	return {
		subGoalMutation,
		voteMutation,
	};
};

export { useModifyTarget };
