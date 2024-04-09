import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { domMax, LazyMotion } from "framer-motion";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientOptions } from "./constants/contants";
import { GuestProvider } from "./context/GuestContext";
import { ModalProvider } from "./context/ModalContext.tsx";
import { SideBarProvider } from "./context/SideBarContext.tsx";
import { TargetProvider } from "./context/TargetContext";
import HttpClient from "./http/HttpClient";
import GuestServiceImpl from "./services/GuestService";
import TargetServiceImpl from "./services/TargetService";
import { routerInfo } from "./utils/router";

import "./styles/global.css";

const queryClient = new QueryClient(QueryClientOptions);

//개발 서버일떄와 서버 일떄 일일이 분기해주는게 맞는걸까?!
const client = new HttpClient(import.meta.env.VITE_LOCAL_SERVER_URL);

// 의존성 주입 인젝터라는 것이 상황에 따라 다른 의존성 넣으주려고 사용한다.
const targetService = new TargetServiceImpl(client.withToken());
const guestService = new GuestServiceImpl(client.withoutToken());
const routerObject = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <GuestProvider guestService={guestService}>
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
    </GuestProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
