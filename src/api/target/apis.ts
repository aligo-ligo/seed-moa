import { API_PATHS } from "@/constants/routerPath";
import { authInstance } from "@/libs/api";
import {
  GetAllPaginatedTargetRequest,
  SeedPaginatedResponseType,
  SeedResponseType,
  TargetType,
} from "@/types/target/type";

const targetAPI = {
  /** 모든 목표 페이지 네이션 전체 조회 */
  getAllPaginatedTargets: async ({
    page,
    size,
  }: GetAllPaginatedTargetRequest) => {
    const { data } = await authInstance.get<SeedPaginatedResponseType>(
      API_PATHS.All_TARGET,
      {
        params: { page, size },
      }
    );
    return data;
  },

  /** 상세 목표 조회 */
  getDetailTarget: async (targetId: number) => {
    const { data } = await authInstance.get<TargetType>(
      API_PATHS.TARGET_DETAIL(targetId)
    );
    return data;
  },

    /** 씨앗 생성 */
  postSeed: async({seed, routines,endDate}:SeedResponseType) => {
    const {data} = await authInstance.post(API_PATHS.CREATE_SEED, {
      seed, routines,endDate
    })
    return data
  },

};

export default targetAPI;
