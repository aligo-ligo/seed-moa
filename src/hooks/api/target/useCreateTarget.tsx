import { useMutation } from "@tanstack/react-query";

import {
  CreateTargetResponse,
  TargetInfoType,
} from "../../../types/TargetTypes";
import { post } from "../../../libs/api";

const useCreateTarget = () => {
  return useMutation<CreateTargetResponse, unknown, TargetInfoType>({
    mutationFn: ({ goal, subGoal, routine, endDate }) =>
      post<CreateTargetResponse>("/target/create", {
        goal,
        subGoal,
        routine,
        endDate,
      }),
  });
};

export default useCreateTarget;
