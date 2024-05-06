import { API_PATHS } from "@/constants/routerPath";
import { authInstance } from "@/libs/api";
import {
  DetailSeedType,
  GetAllPaginatedTargetRequest,
  SeedPaginatedResponseType,
  SeedResponseType
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

  /** 상세 씨앗 정보 조회 */
  getSeedDetails: async (seedId: number) => {
    const { data } = await authInstance.get<DetailSeedType>(
      API_PATHS.SEED_DETAIL(seedId)
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

  /** 루틴 일부 수정 */
  patchRoutineDone:  async(seedId : number) => {
    const {data} = await authInstance.patch(API_PATHS.SEED_DETAIL_ROUTINE_DONE(seedId))
    return data
  },

};

export default targetAPI;
