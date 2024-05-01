import KakaoLoginPage from "@/pages/KaKaoLogin";

import Auth from "@/pages/Auth";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/NotFound";

import QuestionPage from "../pages/QuestionPage";

import { ROUTER_PATHS } from "@/constants/routerPath";

import TargetPage from "@/pages/TargePage";
import TargetCreate from "../pages/TargetCreate";
import TargetDetail from "../pages/TargetDetail";

export const routerChildrenInfo = [
  {
    index: true,
    element: <LandingPage />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNIN,
    element: <Auth />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNUP,
    element: <Auth />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
    element: <KakaoLoginPage />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.TARGET,
    element: <TargetPage />,
    withAuthorization: true,
  },
  {
    path: "target/:id",
    element: <TargetDetail />,
    withAuthorization: true,
  },
  {
    path: ROUTER_PATHS.CREATE_TARGET,
    element: <TargetCreate />,
    withAuthorization: true,
  },
  {
    path: "faq",
    element: <QuestionPage />,
    withAuthorization: false,
  },
];
export const routerInfo = [
  {
    path: ROUTER_PATHS.ROOT,
    errorElement: <NotFound />,
    children: routerChildrenInfo,
  },
];
