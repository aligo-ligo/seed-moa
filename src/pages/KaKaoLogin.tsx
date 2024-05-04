import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import authAPI from "@/api/auth/apis";
import IMAGE_MAP from "@/constants/image";
import STORAGE_KEYS from "@/constants/storageKeys";

import { ROUTER_PATHS } from "@/constants/routerPath";
import { useMutation } from "@tanstack/react-query";

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") as string;

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
        localStorage.setItem(
          STORAGE_KEYS.accessToken,
          data.accessToken as string
        );
        navigate(ROUTER_PATHS.TARGET);
      } catch (error) {
        //TODO : 에러 처리
        setTimeout(() => navigate(ROUTER_PATHS.ROOT), 1000);
      }
    })();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <img src={IMAGE_MAP.oliIcon} alt="loading_oli_image" />
          <img src={IMAGE_MAP.oliIcon} alt="loading_oli_image" />
          <img src={IMAGE_MAP.oliIcon} alt="loading_oli_image" />
          <img src={IMAGE_MAP.oliIcon} alt="loading_oli_image" />
          <img src={IMAGE_MAP.oliIcon} alt="loading_oli_image" />
        </div>

        <h1 className="mt-10 text-xl text-orange-500">카카오톡 로그인 중..</h1>
        <h1 className="mt-2 text-xl text-orange-500">잠시만 기다려주세요</h1>
      </div>
    </section>
  );
};

export default KakaoLoginPage;
