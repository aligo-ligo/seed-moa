import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { get } from "../../../libs/api";
import { TargetType } from "../../../types/TargetTypes";

export interface Response {
  question_feedback: Promise<TargetType[]>;
}

const useGetAllTargets = (options?: UseQueryOptions<Response>) => {
  return useQuery<Response>({
    queryKey: ["targets"],
    queryFn: () => get<Response>(`target/list`),
    ...options,
  });
};

export default useGetAllTargets;
