import { useMutation, useQueryClient } from "@tanstack/react-query";

import targetOptions from "@/api/target/queryOptions";
import { authInstance } from "@/libs/api";
import { CreateTargetResponse } from "../../../types/TargetTypes";

const useCreateTarget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ goal, subGoal, routine, endDate }: any) =>
      authInstance.post<CreateTargetResponse>("/target/create", {
        goal,
        subGoal,
        routine,
        endDate,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.all,
        refetchType: "all",
      });
    },
    onError: () => {
      //TODO: ERROR toast 구현
      console.log("error");
    },
  });
};

export default useCreateTarget;
