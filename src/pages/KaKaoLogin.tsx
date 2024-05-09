import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import authAPI from '@/api/auth/apis';
import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import { ROUTER_PATHS } from '@/constants/routerPath';
import STORAGE_KEYS from '@/constants/storageKeys';

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') as string;

  const { mutateAsync } = useMutation({ mutationFn: authAPI.postKakaoCode });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!code) {
        navigate(ROUTER_PATHS.ROOT);
        return;
      }

      try {
        const data = await mutateAsync(code);
        localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken as string);
        localStorage.setItem(STORAGE_KEYS.refreshToken, data.refreshToken as string);
        setTimeout(() => navigate(ROUTER_PATHS.TARGET), 1000);
      } catch (error) {
        //TODO : 에러 처리
        setTimeout(() => navigate(ROUTER_PATHS.ROOT), 1000);
      }
    })();
  }, [code, mutateAsync, navigate]);

  return (
    <section className="flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col items-center justify-center">
        <Typography type="heading1" className="text-white mb-4">
          LOADING...
        </Typography>
        <Spinner color="text-white" />
      </div>
    </section>
  );
};

export default KakaoLoginPage;
