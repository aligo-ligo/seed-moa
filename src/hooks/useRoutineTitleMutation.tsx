import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';

type UpdateRoutineTitleType = {
  routineId: number;
  routineTitle: string;
};

const useRoutineTitleMutation = (routineId: number) => {
  const queryClient = useQueryClient();

  const { mutate: updateRoutineTitle } = useMutation({
    mutationFn: ({ routineId, routineTitle }: UpdateRoutineTitleType) =>
      targetAPI.patchRoutineTitle(routineId, routineTitle),
    //TDOD : 쿼리 캐싱 무효화가 진행되지 않는 문제 발생
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [...targetOptions.all, routineId],
        refetchType: 'all',
      });
      console.log('t실행됨');
    },
    onError: () => {
      //TODO: 에러 구현 토스트 UI
      console.error('error');
    },
  });
  return { updateRoutineTitle };
};

export default useRoutineTitleMutation;
