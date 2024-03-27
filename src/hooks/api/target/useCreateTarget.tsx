import { useMutation } from "@tanstack/react-query";

import { post } from "../../../libs/api";
import {
  CreateTargetResponse,
  TargetInfoType,
} from "../../../types/TargetTypes";

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
