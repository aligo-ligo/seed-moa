import { useMutation, useQueryClient } from "@tanstack/react-query";

import { VoteResponseType } from "../types/GuestType";
import { GUEST_KEY } from "../utils/constant/queryKeyConstants";
import { useGuest } from "./useGuest";

const usePatchVote = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const guestService = useGuest();

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
    voteMutation,
  };
};

export { usePatchVote };
