import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { OliImage } from "@/constant/image";
import { useAuthService } from "@/hooks/useAuth";

export default function KakaoLogin() {
  //TODO : const code = new URL(window.location.href).searchParams.get("code"); 에서 useSearchParams 훅 사용한 이유!
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const authService = useAuthService();
  const navigate = useNavigate();

  useEffect(() => {
    const getKakaoToken = async () => {
      await authService
        ?.kakaoSignin(code)
        .then(() => {
          navigate("/target");
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    getKakaoToken();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <img src={OliImage} alt="사진" className="" />
          <img src={OliImage} alt="사진" className="" />
          <img src={OliImage} alt="사진" className="" />
          <img src={OliImage} alt="사진" className="" />
          <img src={OliImage} alt="사진" className="" />
        </div>

        <h1 className="mt-10 text-xl text-orange-500">카카오톡 로그인 중..</h1>
        <h1 className="mt-2 text-xl text-orange-500">잠시만 기다려주세요</h1>
      </div>
    </section>
  );
}
