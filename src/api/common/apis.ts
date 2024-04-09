
import { baseInstance } from "@/libs/api";
import { UserStatusType } from "@/types/GuestType";


const commonAPI = {
  /** 사용한 유저와 만들어진 타켓 수 요청 */
  getUserStatus: async () => {
    const { data } = await baseInstance.get<UserStatusType>("/");
    return data;
  },
};

export default commonAPI;
