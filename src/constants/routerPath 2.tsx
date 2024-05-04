export const API_PATHS = {
  All_TARGET: "/target/list",
  TARGET_DETAIL: (targetId: number) => `target/detail?id=${targetId}` as const,
  TARGET_CREATE: "target/create",
  TARGET_SUBGOAL: "target/update",
} as const;

export const ROUTER_PATHS = {
  ROOT: "/",
  TEST_CONSTANT: "/test/const",
  MODAL_TEST: "/modal-test",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SIGNIN_REDIRECT_KAKAO: "/kakao",
  TARGET: "/target",
} as const;
