export type TargetStepType = "seed" | "routines" | "duration";

export type CreateTargetResponse = number;
export type SubGoal = {
  id: string | undefined;
  value: string;
  completeDate: string | null;
};

export type ShareResultType = {
  shortUrl: string;
};
