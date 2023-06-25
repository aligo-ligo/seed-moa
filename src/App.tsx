import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientOptions } from "./utils/contants";
import LandingPage from "./pages/landingPage";
import Auth from "./pages/Auth";
import HttpClient from "./network/HttpClient";
import AuthServiceImpl from "./services/AuthService";
import { AuthProvider } from "./context/AuthContext";
import Target from "./pages/Target";
import TargetServiceImpl from "./services/TargetService";
import { InfoProvider } from "./context/TargetContext";
import TargetDetail from "./pages/TargetDetail";
import TargetCreate from "./pages/TargetCreate";
import KakaoLogin from "./pages/KaKaoLogin";
import { ModalProvider } from "./context/ModalContext";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		errorElement: <NotFound />,
	},
	{
		path: "signin",
		element: <Auth />,
		errorElement: <NotFound />,
	},
	{
		path: "signup",
		element: <Auth />,
		errorElement: <NotFound />,
	},
	{
		path: "kakao",
		element: <KakaoLogin />,
		errorElement: <NotFound />,
	},
	{
		path: "target",
		element: <Target />,
		errorElement: <NotFound />,
	},
	{
		path: "target/:id",
		element: <TargetDetail />,
		errorElement: <NotFound />,
	},
	{
		path: "target/create",
		element: <TargetCreate />,
		errorElement: <NotFound />,
	},
]);

function App() {
	const queryClient = new QueryClient(QueryClientOptions);

	// const client = new HttpClient("http://192.168.219.103:8080/");
	const client = new HttpClient("http://localhost:5173/");
	const authService = new AuthServiceImpl(client.httpClient);
	const infoService = new TargetServiceImpl(client.withToken());

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider authService={authService}>
					<InfoProvider infoService={infoService}>
						<ModalProvider>
							<main className="phone:w-phone desktop:w-desktop mx-auto bg-white min-h-full overflow-auto scroll-smooth">
								<RouterProvider router={router} />
							</main>
						</ModalProvider>
					</InfoProvider>
				</AuthProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
