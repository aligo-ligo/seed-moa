import { API_PATHS } from "@/constants/routerPath";
import { authInstance } from "@/libs/api";
import {
  GetAllPaginatedTargetRequest,
  TargetResponseType,
  TargetType,
} from "@/types/target/type";

const targetAPI = {
  /** 모든 목표 페이지 네이션 전체 조회 */
  getAllPaginatedTargets: async ({
    page,
    size,
  }: GetAllPaginatedTargetRequest) => {
    const { data } = await authInstance.get<TargetResponseType>(
      API_PATHS.All_TARGET,
      {
        params: { page, size },
      }
    );
    return data;
  },

  getDetailTarget: async (targetId: number) => {
    const { data } = await authInstance.get<TargetType>(
      API_PATHS.TARGET_DETAIL(targetId)
    );
    return data;
  },

  postSubGoalStatus: async ({
    targetId,
    value,
    completeDate,
  }: postSubgoalType) => {
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
