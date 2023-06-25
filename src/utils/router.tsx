import NotFound from "../pages/NotFound";
import LandingPage from "../pages/landingPage";
import Auth from "../pages/Auth";
import KakaoLogin from "../pages/KaKaoLogin";
import Target from "../pages/Target";
import TargetDetail from "../pages/TargetDetail";
import TargetCreate from "../pages/TargetCreate";

export const routerArray = [
	{
		path: "/",
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "signin",
				element: <Auth />,
			},
			{
				path: "signup",
				element: <Auth />,
			},
			{
				path: "kakao",
				element: <KakaoLogin />,
			},
			{
				path: "target",
				element: <Target />,
			},
			{
				path: "target/:id",
				element: <TargetDetail />,
			},
			{ path: "target/create", element: <TargetCreate /> },
		],
	},
];
