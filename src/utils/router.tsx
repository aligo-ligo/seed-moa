import App from '@/App';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { RoutineProvider } from '@/context/RoutineContext';
import KakaoLoginPage from '@/pages/KaKaoLogin';
import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/NotFound';
import TargetPage from '@/pages/seedPage';
import { default as Mypage, default as QuestionPage } from '../pages/Mypage';
import TargetCreate from '../pages/TargetCreate';
import TargetDetail from '../pages/TargetDetail';

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
    element: <TargetPage />,
    withAuthorization: true,
  },
  {
    path: 'target/:id',
    element: (
      <RoutineProvider>
        <TargetDetail />
      </RoutineProvider>
    ),
    withAuthorization: true,
  },
  {
    path: ROUTER_PATHS.CREATE_TARGET,
    element: <TargetCreate />,
    withAuthorization: true,
  },
  {
    path: 'faq',
    element: <QuestionPage />,
    withAuthorization: false,
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
    errorElement: <NotFound />,
    children: routerChildrenInfo,
  },
];
