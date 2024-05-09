import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { queryClientOption } from './constants/contants';
import ToastProvider from './context/toast/ToastProvider';
import './styles/global.css';
import { routerInfo } from './utils/router';

const queryClient = new QueryClient(queryClientOption);

const routerObject = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
      <main className="layout overflow-auto bg-white scroll-smooth">
        <RouterProvider router={routerObject} />
      </main>
    </ToastProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
