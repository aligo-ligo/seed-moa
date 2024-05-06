import { queryOptions } from '@tanstack/react-query';

import commonAPI from '@/api/common/apis';
import { GetAllPaginatedTargetRequest } from '@/types/target/type';
import targetAPI from './apis';

const targetOptions = {
  all: ['seed'] as const,

  targets: ({ page, size }: GetAllPaginatedTargetRequest) =>
    queryOptions({
      queryKey: [...targetOptions.all] as const,
      queryFn: () => targetAPI.getAllPaginatedTargets({ page, size }),
    }),
  detailTarget: (seedId: number) =>
    queryOptions({
      queryKey: [...targetOptions.all, seedId] as const,
      queryFn: () => targetAPI.getSeedDetails(seedId),
    }),

  totalInfo: () =>
    queryOptions({
      queryKey: ['total'],
      queryFn: commonAPI.getUserStatus,
    }),
};

export default targetOptions;
