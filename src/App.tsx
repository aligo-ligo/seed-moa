import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientOptions } from "./utils/contants";
import LandingPage from "./pages/landingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "signin",
		element: <div>signin</div>,
	},
	{
		path: "signup",
		element: <div>signup</div>,
	},
]);

function App() {
	const queryClient = new QueryClient(QueryClientOptions);
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<main className="w-desktop mx-auto bg-white min-h-full'">
					<RouterProvider router={router} />
				</main>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
