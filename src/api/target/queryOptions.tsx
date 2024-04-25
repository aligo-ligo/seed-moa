import { queryOptions } from "@tanstack/react-query";
import targetAPI from "./apis";

const targetOptions = {
  all: ["targets"] as const,

  targets: () =>
    queryOptions({
      queryKey: [...targetOptions.all] as const,
      queryFn: () => targetAPI.getAllTargets(),
    }),
};

export default targetOptions;
