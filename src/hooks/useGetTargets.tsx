import { useQuery } from "@tanstack/react-query";
import { TARGET_KEY, TARGET_LIST_KEY } from "../constants/queryKeyConstants";

import { TargetService } from "../types/TargetTypes";

export const useAllTarget = (targetService: TargetService) => {
  return useQuery({
    queryKey: [TARGET_LIST_KEY],
    queryFn: () => {
      targetService?.getAllTarget();
    },
  });
};

export const useTargetOnUser = (
  id: string | undefined,
  targetService: TargetService
) => {
  return useQuery({
    queryKey: [TARGET_KEY, id],
    queryFn: () => targetService?.getTarget(id),
  });
};
