import { useNavigate } from "react-router-dom";

import KakaoLoginButton from "@/components/auth/KakaoLoginButton";
import StyledButton from "@/components/common/StyledButton";
import IMAGE_MAP from "@/constants/image";

import { ROUTER_PATHS } from "@/constants/routerPath";
import SkeletonElement from "../../components/layout/Skeleton";
import Header from "../../components/target/Header";
import { useInfo } from "../../hooks/useGetInfo";
import { useGuest } from "../../hooks/useGuest";

const LandingPage = () => {
  const APP_KEY = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}${ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO}`;

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();
  const guestService = useGuest();
  const { data: target, isLoading } = useInfo(guestService);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start px-6">
      <Header />
      <div className="flex flex-col items-center justify-center h-[70%]">
        <img
          src={IMAGE_MAP.mainOliImage}
          alt="Hero-image"
          className="w-2/5 pointer-events-none"
        />
        <img
          src={IMAGE_MAP.logoImage}
          alt="logo-image"
          className="w-3/5 pointer-events-none"
        />

        <div className="flex flex-col items-center">
          <h2 className="text-xl desktop:text-2xl  text-gray mt-8 pointer-events-none font-bold">
            공유하여 목표를 달성해보세요!
          </h2>

          {isLoading ? (
            <div className=" mt-8 mb-4 text-lg desktop:text-xl font-semibold text-gray w-full">
              <SkeletonElement type="landing" />
              <SkeletonElement type="landing" />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mb-10 mt-10 pointer-events-none">
              <p className=" text-lg desktop:text-xl font-medium text-gray mb-2">
                {`${target?.userCount} 명의 유저가 ${target?.targetCount}개의`}
              </p>
              <p className=" text-lg desktop:text-xl font-medium text-gray ">
                목표를 위해 달려가고 있어요
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-5 w-full px-6">
        <StyledButton
          styleName="landing"
          onClick={() => navigate("/signin")}
          type="button"
        >
          일반 로그인
        </StyledButton>
        <KakaoLoginButton href={KAKAO_AUTH_URI} />
      </div>
    </div>
  );
};

export default LandingPage;
