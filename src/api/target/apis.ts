import { postSubgoalType } from "@/components/modal/CheckModal";
import { API_PATHS } from "@/constants/routerPath";
import { authInstance } from "@/libs/api";
import { TargetResponseType, TargetType } from "@/types/TargetTypes";


const targetAPI = {
  /** 모든 목표 전체 조회 */
  getAllTargets: async () => {
    const { data } = await authInstance.get<TargetResponseType>(
      API_PATHS.All_TARGET,
    );
    return data;
  },

  getDetailTarget: async (targetId:number) => {
    const { data } = await authInstance.get<TargetType>(
      API_PATHS.TARGET_DETAIL(targetId),
    );
    return data;
  },
  
  postSubGoalStatus: async ({targetId, value, completeDate}:postSubgoalType) => {
    const { data } = await authInstance.post<TargetType>(
      API_PATHS.TARGET_SUBGOAL,
      {
				targetId,
				value,
				completeDate,
			}
    );
    return data;
  },

};

export default targetAPI;
