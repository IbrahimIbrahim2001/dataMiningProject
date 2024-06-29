import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';

//mantine UI
import { MantineProvider } from '@mantine/core';

//react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//redux
import { Provider } from "react-redux"; 
import {store}  from './app/store.ts';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>

      <QueryClientProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
