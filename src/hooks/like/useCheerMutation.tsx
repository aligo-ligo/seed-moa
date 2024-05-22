import { useMutation, useQueryClient } from '@tanstack/react-query';

import seedAPI from '@/api/seed/apis';
import seedOptions from '@/api/seed/queryOptions';
import useToast from '../useToast';

const useCheerMutation = (seedId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutateAsync: likes } = useMutation({
    mutationFn: () => seedAPI.patchSeedLikes(seedId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: seedOptions.getCheeringUserList(seedId).queryKey,
        refetchType: 'all',
      });

      toast({ type: 'default', message: '응원 성공!' });
    },
  });
  return { likes };
};

export default useCheerMutation;
