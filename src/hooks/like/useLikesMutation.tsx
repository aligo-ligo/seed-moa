import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import seedAPI from '@/api/seed/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import useToast from '../useToast';

const useRoutineMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutateAsync: likes } = useMutation({
    mutationFn: (seedId: number) => seedAPI.patchSeedLikes(seedId),
    onSuccess: async () => {
      // await queryClient.invalidateQueries({
      //   queryKey: seedOptions.detailTarget(seedId).queryKey,
      //   refetchType: 'all',
      // });
      // await queryClient.invalidateQueries({
      //   queryKey: seedOptions.all,
      //   refetchType: 'all',
      // });
    },
    onError: (error) => {
      //TODO : 로그인 유도 어떻게 할지?!
      if (isAxiosError(error)) {
        if (error.response?.data.message === ERROR_RESPONSES.authenticationEntryPoint) {
          toast({ type: 'warning', message: '빠르게 로그인하시면 좋아요 기능이 가능합니다.' });
        }
      }
    },
  });
  return { likes };
};

export default useRoutineMutation;
