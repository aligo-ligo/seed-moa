import NotFound from "../pages/NotFound";
import LandingPage from "../pages/landingPage";
import Auth from "../pages/Auth";
import KakaoLogin from "../pages/KaKaoLogin";
import Target from "../pages/Target";
import TargetDetail from "../pages/TargetDetail";
import TargetCreate from "../pages/TargetCreate";
import Authorization from "../components/layout/Authorization";
import QuestionPage from "../pages/QuestionPage";
import TargetGuest from "../pages/TargetGuest";
import { CheckModalProvider } from "../context/CheckModalContext";

export const routerChildrenInfo = [
	{
		index: true,
		element: <LandingPage />,
		withAuthorization: false,
	},
	{
		path: "signin",
		element: <Auth />,
		withAuthorization: false,
	},
	{
		path: "signup",
		element: <Auth />,
		withAuthorization: false,
	},
	{
		path: "kakao",
		element: <KakaoLogin />,
		withAuthorization: false,
	},
	// {
	// 	path: "target",
	// 	element: <Target />,
	// 	withAuthorization: false,
	// },
	// {
	// 	path: "target/:id",
	// 	element: <TargetDetail />,
	// 	withAuthorization: false,
	// },
	// {
	// 	path: "target/create",
	// 	element: <TargetCreate />,
	// 	withAuthorization: false,
	// },
	{
		path: "target",
		element: <Target />,
		withAuthorization: true,
	},
	{
		path: "target/:id",
		element: (
			<CheckModalProvider>
				<TargetDetail />,
			</CheckModalProvider>
		),
		withAuthorization: true,
	},
	{
		path: "target/create",
		element: <TargetCreate />,
		withAuthorization: true,
	},
	{
		path: "faq",
		element: <QuestionPage />,
		withAuthorization: false,
	},
	{
		path: "result/:id",
		element: <TargetGuest />,
		withAuthorization: false,
	},
];

export const mappingRouterWithAuthorization = routerChildrenInfo.map(
	(route) => {
		return route.withAuthorization
			? {
					path: route.path,
					element: <Authorization>{route.element}</Authorization>,
			  }
			: {
					index: true,
					path: route.path,
					element: route.element,
			  };
	}
);

export const routerInfo = [
	{
		path: "/",
		errorElement: <NotFound />,
		children: mappingRouterWithAuthorization,
	},
];
