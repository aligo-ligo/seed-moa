import App from '@/App';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { RoutineProvider } from '@/context/RoutineContext';
import KakaoLoginPage from '@/pages/KaKaoLogin';
import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SeedDetailPage from '@/pages/seedDetailPage';
import SeedPage from '@/pages/seedPage';
import { default as Mypage } from '../pages/Mypage';
import SeedCreatePage from '../pages/SeedCreatePage';

export const routerChildrenInfo = [
  {
    index: true,
    element: <LandingPage />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
    element: <KakaoLoginPage />,
    withAuthorization: false,
  },
  {
    path: ROUTER_PATHS.TARGET,
    element: <SeedPage />,
    withAuthorization: true,
  },
  {
    path: ROUTER_PATHS.TAGET_DETAIL,
    element: (
      <RoutineProvider>
        <SeedDetailPage />
      </RoutineProvider>
    ),
    withAuthorization: true,
  },
  {
    path: ROUTER_PATHS.CREATE_TARGET,
    element: <SeedCreatePage />,
    withAuthorization: true,
  },
  {
    path: ROUTER_PATHS.MYPAGE,
    element: <Mypage />,
    withAuthorization: false,
  },
];
export const routerInfo = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: routerChildrenInfo,
  },
];
