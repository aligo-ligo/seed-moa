import { Pages } from "../response";

export type TargetResponseType = {
  pages: Pages;
  targetInfo: PreviewTargetType[];
};

export type PreviewTargetType = Pick<
  TargetType,
  "id" | "achievementPer" | "userId" | "goal"
> & { successRate: number };

export interface TargetType {
  id: number;
  userId: number;
  startDate: string;
  endDate: string;
  goal: string;
  subGoal: SubGoalType[];
  routine: RoutineType[];
  penalty: string;
  achievementDate: AchievementDate;
  achievementPer: number;
  successVote: number;
  failureVote: number;
  voteTotal: number;
  url: string;
}

export type GetAllPaginatedTargetRequest = {
  page: number;
  size: number;
};

export type SubGoalType = React.ReactNode & {
  id: number;
  value: string;
  completedDate: string | null;
};

export type TargetInfoType = {
  goal: string;
  subGoal: SubGoalType[];
  routine: RoutineType[];
  endDate: string;
};

export type RoutineType = React.ReactNode & {
  id: number;
  value: string;
};

export interface AchievementDate {
  [key: string]: number;
}
