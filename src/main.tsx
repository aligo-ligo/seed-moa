import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { domMax, LazyMotion } from "framer-motion";

import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { queryClientOption } from "./constants/contants";
import { GuestProvider } from "./context/GuestContext";
import { ModalProvider } from "./context/ModalContext.tsx";
import { SideBarProvider } from "./context/SideBarContext.tsx";
import HttpClient from "./http/HttpClient";
import GuestServiceImpl from "./services/GuestService";
import { routerInfo } from "./utils/router";

import "./styles/global.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient(queryClientOption);

const client = new HttpClient(import.meta.env.VITE_LOCAL_SERVER_URL);

const guestService = new GuestServiceImpl(client.withoutToken());
const routerObject = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <GuestProvider guestService={guestService}>
      <SideBarProvider>
        <ModalProvider>
          <LazyMotion features={domMax}>
            <HelmetProvider>
              <main className="layout overflow-auto bg-white scroll-smooth">
                <RouterProvider router={routerObject} />
              </main>
            </HelmetProvider>
          </LazyMotion>
        </ModalProvider>
      </SideBarProvider>
    </GuestProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
