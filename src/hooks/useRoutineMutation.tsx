import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';

const useRoutineMutation = (seedId: number) => {
  console.log('seedId', seedId);
  const queryClient = useQueryClient();
  // const { show } = useToastList();

  const { mutate: checkRotine } = useMutation({
    mutationFn: targetAPI.patchRoutineDone,
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
  return { checkRotine };
};

export default useRoutineMutation;
