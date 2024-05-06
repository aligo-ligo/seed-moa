import { Pages } from '../response';

export type SeedPaginatedResponseType = {
  pages: Pages;
  seedInfo: PreviewSeedType[];
};

export type PreviewSeedType = {
  id: number;
  endDate: string;
  startDate: string;
  seed: string;
  seedState: 'SEED' | 'STEM' | 'TREE' | 'FRUITS';
  routineInfos: RoutineType[];
  completedRoutineCount: number;
};

export interface TargetType {
  id: number;
  userId: number;
  startDate: string;
  endDate: string;
  goal: string;
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

export type SeedResponseType = {
  seed: string;
  routines: RoutineType[];
  endDate: string;
};

export type RoutineType = {
  value: string;
};

export interface AchievementDate {
  [key: string]: number;
}
