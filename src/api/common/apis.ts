
import { API_PATHS } from "@/constants/routerPath";
import { baseInstance } from "@/libs/api";
import { UserStatusType } from "@/types/user/type";



const commonAPI = {
  /** 사용한 유저와 만들어진 씨앗 수 요청 */
  getUserStatus: async () => {
    const { data } = await baseInstance.get<UserStatusType>(API_PATHS.USER_INFO);
    return data;
  },
};

export default commonAPI;
