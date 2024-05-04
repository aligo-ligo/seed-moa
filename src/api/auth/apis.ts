import { API_PATHS } from "@/constants/routerPath";
import { baseInstance } from "@/libs/api";
import { AuthResponse } from "@/types/auth";

const authAPI = {
  /** 카카오 인가 코드 전송 후 로그인 토큰 받아오기 */
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post<AuthResponse>(
      API_PATHS.AUTH_LOGIN_KAKAO,
      null,
      {
        params: {
          code,
        },
      }
    );
    console.log("data", data);
    return data;
  },

};

export default authAPI;
