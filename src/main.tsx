import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { domMax, LazyMotion } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { queryClientOption } from './constants/contants';
import { ModalProvider } from './context/ModalContext.tsx';
import { SideBarProvider } from './context/SideBarContext.tsx';
import { routerInfo } from './utils/router';

import './styles/global.css';

const queryClient = new QueryClient(queryClientOption);

const routerObject = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
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

    <ReactQueryDevtools />
  </QueryClientProvider>,
);
