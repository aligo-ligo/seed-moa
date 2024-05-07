import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';

type UpdateRoutineTitleType = {
  routineId: number;
  routineTitle: string;
};

const useRoutineTitleMutation = (seedId: number) => {
  const queryClient = useQueryClient();

  const { mutate: updateRoutineTitle } = useMutation({
    mutationFn: ({ routineId, routineTitle }: UpdateRoutineTitleType) =>
      targetAPI.patchRoutineTitle(routineId, routineTitle),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.detailTarget(seedId).queryKey,
        refetchType: 'all',
      });
    },
    onError: () => {
      //TODO: 에러 구현 토스트 UI
      console.error('error');
    },
  });
  return { updateRoutineTitle };
};

export default useRoutineTitleMutation;
