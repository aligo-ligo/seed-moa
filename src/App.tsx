import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientOptions } from "./utils/contants";
import HttpClient from "./http/HttpClient";
import AuthServiceImpl from "./services/AuthService";
import { AuthProvider } from "./context/AuthContext";
import TargetServiceImpl from "./services/TargetService";
import { TargetProvider } from "./context/TargetContext";
import { SideBarProvider } from "./context/SideBarContext";
import { routerInfo } from "./utils/router";
import { TokenRepository } from "./repository/tokenRepository";
import { ModalProvider } from "./context/ModalContext";
import { GuestProvider } from "./context/GuestContext";
import GuestServiceImpl from "./services/GuestService";
import { CheckModalProvider } from "./context/CheckModalContext";
import { AuthStateProvider } from "./context/AuthStateContext";

function App() {
	const queryClient = new QueryClient(QueryClientOptions);
	const tokenRepository = new TokenRepository();

	const client = new HttpClient(
		import.meta.env.VITE_SERVER_URL,
		tokenRepository
	);

	const authService = new AuthServiceImpl(client.httpClient, tokenRepository);
	const targetService = new TargetServiceImpl(client.withToken());
	const guestService = new GuestServiceImpl(client.withoutToken());
	const routerObject = createBrowserRouter(routerInfo);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GuestProvider guestService={guestService}>
					<AuthProvider authService={authService}>
						<TargetProvider targetService={targetService}>
							<SideBarProvider>
								<ModalProvider>
									<CheckModalProvider>
										<AuthStateProvider>
											<main className="phone:w-full desktop:w-desktop desktop:mx-auto bg-white min-h-screen overflow-auto scroll-smooth">
												<RouterProvider router={routerObject} />
											</main>
										</AuthStateProvider>
									</CheckModalProvider>
								</ModalProvider>
							</SideBarProvider>
						</TargetProvider>
					</AuthProvider>
				</GuestProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
