import { Pages } from '../response';

export type SeedPaginatedResponseType = {
  pages: Pages;
  seedInfo: PreviewSeedType[];
};

export type SeedType = {
  id: number;
  endDate: string;
  startDate: string;
  seed: string;
  completedRoutineCount: number;
};

export type PreviewSeedType = SeedType & {
  seedState: 'SEED' | 'STEM' | 'TREE' | 'FRUITS';
  routineInfos: RoutineType[];
};

export type DetailSeedType = SeedType & {
  state: 'SEED' | 'STEM' | 'TREE' | 'FRUITS';
  routineDetails: RoutineDetailType[];
};

type RoutineType = {
  value: string;
};

export type RoutineDetailType = {
  routineId: number;
  routineTitle: string;
  completedRoutineToday: boolean;
};

export type GetAllPaginatedTargetRequest = {
  page: number;
  size: number;
};

export type SeedResponseType = {
  seed: string;
  routines: RoutineType[];
  endDate: string;
};

export interface AchievementDate {
  [key: string]: number;
}
