import { authInstance } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { TargetType } from "../../../types/TargetTypes";

const useGetAllTargets = () => {
  return useQuery({
    queryKey: ["targets"],
    queryFn: () => authInstance.get<TargetType[]>(`target/list`),
  });
};

export default useGetAllTargets;
