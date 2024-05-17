import React from 'react';

import '../src/styles/global.css';

import type { Preview } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import queryClient from '../src/constants/queryClient';

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
    withRouter,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: '*',
      },
    }),
  },
};

export default preview;
