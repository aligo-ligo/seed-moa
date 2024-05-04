export type TargetStepType = "goal" | "subGoal" | "duration";

export type CreateTargetResponse = number;
export type SubGoal = {
  id: string | undefined;
  value: string;
  completeDate: string | null;
};

export type ShareResultType = {
  shortUrl: string;
};

export type TargetCreateProps = {
  setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};
