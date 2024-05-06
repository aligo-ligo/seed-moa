import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';
import useToastList from '@/hooks/useToastList';
import { SeedResponseType } from '@/types/target/type';

const useCreateSeedMutation = () => {
  const queryClient = useQueryClient();
  const { show } = useToastList();
  const navigate = useNavigate();

  const { mutate: submitSeed } = useMutation({
    mutationFn: ({ seed, routines, endDate }: SeedResponseType) =>
      targetAPI.postSeed({ seed, routines, endDate }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.all,
        refetchType: 'all',
      });
      show('createToast');
      navigate('/target');
    },
    onError: () => {
      //TODO: ERROR toast 구현
      console.error('error');
    },
  });
  return { submitSeed };
};

export default useCreateSeedMutation;
