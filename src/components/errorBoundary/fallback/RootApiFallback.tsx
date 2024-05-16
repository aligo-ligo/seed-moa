import { isAxiosError } from 'axios';
import { type FallbackProps } from 'react-error-boundary';

import Logo from '@/assets/logo/Logo';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';
import ERROR_RESPONSES from '@/constants/errorMessages';

const RootApiFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const shouldSkip =
    !isAxiosError(error) ||
    error.response?.data.error === ERROR_RESPONSES.accessExpired ||
    error.response?.data.error === ERROR_RESPONSES.reissueFailed ||
    error.response?.data.error === ERROR_RESPONSES.authenticationEntryPoint;

  if (shouldSkip) {
    console.log('api -> unknown error', error);
    throw error;
  }

  console.log('error in API FALLBack', error);
  return (
    <main className="relative w-full h-dvh flex justify-center items-start">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="flex gap-6">
            <Logo width={50} />
            <Logo width={50} />
            <Logo width={50} />
          </div>
        </div>
        <h2 className="flex-1 text-gray-10 font-jalnan">
          <Typography>{error.response?.data.error}</Typography>
        </h2>
      </div>

      <div className="absolute bottom-5 text-xl w-[90%] bg-gray-100 rounded-xl">
        <Button
          className="w-full h-16 duration-300"
          variant="secondary"
          onClick={resetErrorBoundary}
        >
          재시도
        </Button>
      </div>
    </main>
    // <main css={styles.container}>
    //   <img css={styles.image} src={ErrorImage} alt="오류" />
    //   <h2 css={styles.title}>네트워크 오류 발생</h2>
    //   <h2 css={styles.description}>{error.response?.data ?? error.message}</h2>
    //   <Button
    //     css={styles.button}
    //     variant="primary"
    //     size="sm"
    //     type="button"
    //     onClick={resetErrorBoundary}
    //   >
    //     재시도
    //   </Button>
    // </main>
  );
};

export default RootApiFallback;
