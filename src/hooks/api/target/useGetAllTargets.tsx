import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { get } from "../../../libs/api";
import { TargetType } from "../../../types/TargetTypes";

const useGetAllTargets = (options?: UseQueryOptions<TargetType[]>) => {
  return useQuery<TargetType[]>({
    queryKey: ["targets"],
    queryFn: () => get<TargetType[]>(`target/list`),
    ...options,
  });
};

export default useGetAllTargets;
