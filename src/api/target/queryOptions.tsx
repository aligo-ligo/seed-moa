import { queryOptions } from "@tanstack/react-query";
import targetAPI from "./apis";

const targetOptions = {
  all: ["targets"] as const,

  targets: () =>
    queryOptions({
      queryKey: [...targetOptions.all] as const,
      queryFn: () => targetAPI.getAllTargets(),
    }),
  detailTarget: (targetId: number) =>
    queryOptions({
      queryKey: ["target", targetId] as const,
      queryFn: () => targetAPI.getDetailTarget(targetId),
    }),
};

export default targetOptions;
