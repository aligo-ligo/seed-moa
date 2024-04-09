import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientOptions } from "./utils/constant/contants";
import HttpClient from "./http/HttpClient";
import AuthServiceImpl from "./services/AuthService";
import { AuthProvider } from "./context/AuthContext";
import TargetServiceImpl from "./services/TargetService";
import { TargetProvider } from "./context/TargetContext";
import { SideBarProvider } from "./context/SideBarContext";
import { routerInfo } from "./utils/router";
import { ModalProvider } from "./context/ModalContext";
import { GuestProvider } from "./context/GuestContext";
import GuestServiceImpl from "./services/GuestService";
import { HelmetProvider } from "react-helmet-async";
import { domMax, LazyMotion } from "framer-motion";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  release: import.meta.env.VITE_RELEASE,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [import.meta.env.VITE_SERVER_URL],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

  beforeSend(event, hint) {
    console.log(event, hint);
    return event;
  },
});

function App() {
  const queryClient = new QueryClient(QueryClientOptions);

  //개발 서버일떄와 서버 일떄 일일이 분기해주는게 맞는걸까?!
  const client = new HttpClient(import.meta.env.VITE_LOCAL_SERVER_URL);

  // 의존성 주입 인젝터라는 것이 상황에 따라 다른 의존성 넣으주려고 사용한다.
  const authService = new AuthServiceImpl(client.httpClient);
  const targetService = new TargetServiceImpl(client.withToken());
  const guestService = new GuestServiceImpl(client.withoutToken());
  const routerObject = createBrowserRouter(routerInfo);

  return (
    <QueryClientProvider client={queryClient}>
      <GuestProvider guestService={guestService}>
        <AuthProvider authService={authService}>
          <TargetProvider targetService={targetService}>
            <SideBarProvider>
              <ModalProvider>
                <LazyMotion features={domMax}>
                  <HelmetProvider>
                    <main className="phone:w-full desktop:w-desktop desktop:mx-auto bg-white min-h-screen overflow-auto scroll-smooth">
                      <RouterProvider router={routerObject} />
                    </main>
                  </HelmetProvider>
                </LazyMotion>
              </ModalProvider>
            </SideBarProvider>
          </TargetProvider>
        </AuthProvider>
      </GuestProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
