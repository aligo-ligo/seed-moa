import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import useAuth from '@/hooks/auth/useAuth';

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') as string;
  const { login } = useAuth();

  //TODO : 로그인한 유저가 메인에서 뒤로가기를 누를 경우 불필요한 요청으로 500 에러 헨들링 필요
  useEffect(() => {
    if (code) login(code);
  }, [login, code]);

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
