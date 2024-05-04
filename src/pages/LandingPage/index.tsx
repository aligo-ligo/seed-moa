import KakaoLoginButton from "@/components/auth/KakaoLoginButton";

import Logo from "@/assets/logo/Logo";
import ReversedLogo from "@/assets/logo/ReversedLogo";
import { Typography } from "@/components/common/typography/Typography";
import { ROUTER_PATHS } from "@/constants/routerPath";

const LandingPage = () => {
  const APP_KEY = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}${ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO}`;

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const guestService = useGuest();
  //   const { data: target, isLoading } = useInfo(guestService);

  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-start p-6">
      <div className="flex flex-col w-full items-center h-[80%]">
        <div className="w-full flex flex-col h-[80%] pt-12">
          <div className="flex flex-col items-center gap-4">
            <Typography type="title1" className="text-white font-jalnan">
              씨앗 모아
            </Typography>
            <div className="flex flex-col items-center">
              <Typography type="heading3" className="text-white">
                목표 달성을 위한
              </Typography>
              <Typography type="heading3" className="text-white ">
                나만의 습관 형성 서비스
              </Typography>
            </div>
          </div>
          <div className="w-full relative flex-1 gap-4">
            <Logo width={160} className="absolute top-0 left-0" />
            <ReversedLogo className="absolute bottom-0 right-0" />
          </div>
        </div>

        {/* {isLoading ? (
          <div className=" mt-8 mb-4 text-lg desktop:text-xl font-semibold text-gray w-full">
            <SkeletonElement type="landing" />
            <SkeletonElement type="landing" />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center pointer-events-none text-white pt-12">
            <Typography type="heading3">
              전체 {target?.userCount} 명의 유저가
            </Typography>
            <Typography type="heading3">
              총 {target?.targetCount}개의 씨앗을 심었어요!
            </Typography>
          </div>
        )} */}
      </div>

      <div className="absolute bottom-5 w-full px-6">
        <KakaoLoginButton href={KAKAO_AUTH_URI} />
      </div>
    </div>
  );
};

export default LandingPage;
