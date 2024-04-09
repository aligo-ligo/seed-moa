import { baseInstance } from "@/libs/api";
import { AuthResponse, UserInfoType } from "@/types/auth";

const authAPI = {
  /** 카카오 인가 코드 전송 후 로그인 토큰 받아오기 */
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post<AuthResponse>(`/users/kakao?code=${code}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return data;
  },
  /** 일반 회원 가입 요청 */
  postSignup: async ({ email, password, nickName }: UserInfoType) => {
    const { data } = await baseInstance.post<AuthResponse>("/users/signup", {
      email,
      password,
      nickName,
    });
    return data;
  },
  /** 일반 로그인 요청 */
  postSignin: async ({ email, password }: UserInfoType) => {
    const { data } = await baseInstance.post<AuthResponse>("/users/signin", {
      email,
      password,
    });
    return data;
  },
};

export default authAPI;
