import { baseInstance } from "@/libs/api";
import { AuthResponse, UserInfoType } from "@/types/AuthType";

const authAPI = {
  /** 카카오 인가 코드 전송 후 로그인 토큰 받아오기 */
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post<{
      accessToken: string;
      refreshToken: string;
      firstLogin: boolean;
    }>(`/api/auth/login/kakao?code=${code}`);
    return data;
  },
  postSignup: async ({ email, password, nickName }: UserInfoType) => {
    const { data } = await baseInstance.post<AuthResponse>("users/signup", {
      email,
      password,
      nickName,
    });
    return data;
  },
  postSignin: async ({ email, password }: UserInfoType) => {
    const { data } = await baseInstance.post<AuthResponse>("users/signin", {
      email,
      password,
    });
    return data;
  },
};

export default authAPI;
