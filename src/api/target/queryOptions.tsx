import { GetAllPaginatedTargetRequest } from "@/types/target/type";
import { queryOptions } from "@tanstack/react-query";
import commonAPI from "../common/apis";
import targetAPI from "./apis";

const targetOptions = {
  all: ["targets"] as const,

  targets: ({ page, size }: GetAllPaginatedTargetRequest) =>
    queryOptions({
      queryKey: [...targetOptions.all] as const,
      queryFn: () => targetAPI.getAllPaginatedTargets({ page, size }),
    }),
  detailTarget: (targetId: number) =>
    queryOptions({
      queryKey: ["target", targetId] as const,
      queryFn: () => targetAPI.getDetailTarget(targetId),
    }),

  totalInfo: () =>
    queryOptions({
      queryKey: ["total"],
      queryFn: commonAPI.getUserStatus,
    }),
};

export default targetOptions;
