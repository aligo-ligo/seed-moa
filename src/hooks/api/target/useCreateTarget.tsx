import { useMutation } from "@tanstack/react-query";

import { authInstance } from "@/libs/api";
import { CreateTargetResponse } from "../../../types/TargetTypes";

const useCreateTarget = () => {
  return useMutation({
    mutationFn: ({ goal, subGoal, routine, endDate }: any) =>
      authInstance.post<CreateTargetResponse>("/target/create", {
        goal,
        subGoal,
        routine,
        endDate,
      }),
  });
};

export default useCreateTarget;
