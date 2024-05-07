import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';

const useDeleteSeedMutation = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: async (seedId: number) => {
        await targetAPI.deleteSeed(seedId);
      },
      onSuccess: () => {
        navigate('/target');
        queryClient.invalidateQueries({
          queryKey: [...targetOptions.all],
          refetchType: 'all',
        });
      },
    });
  
    return {mutate}
}

export default useDeleteSeedMutation