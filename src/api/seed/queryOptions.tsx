import { queryOptions } from '@tanstack/react-query';

import commonAPI from '@/api/common/apis';
import { GetAllPaginatedTargetRequest } from '@/types/target/type';
import seedAPI from './apis';

const targetOptions = {
  all: ['seed'] as const,

  targets: ({ page, size }: GetAllPaginatedTargetRequest) =>
    queryOptions({
      queryKey: [...targetOptions.all] as const,
      queryFn: () => seedAPI.getAllPaginatedTargets({ page, size }),
    }),
  detailTarget: (seedId: number, callQueryFn?: boolean) => {
    return queryOptions({
      queryKey: [...targetOptions.all, seedId] as const,
      queryFn: callQueryFn ? () => seedAPI.getSeedDetails(seedId) : undefined,
    });
  },

  totalInfo: () =>
    queryOptions({
      queryKey: ['total'],
      queryFn: commonAPI.getUserStatus,
    }),

  getMyInfo: () =>
    queryOptions({
      queryKey: ['my'],
      queryFn: seedAPI.getMyInfo,
    }),
};

export default targetOptions;
