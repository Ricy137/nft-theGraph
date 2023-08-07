import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import { ToastRender } from '@components/Toast';
import Providers from '@modules/Providers';
import './index.css';
import 'uno.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <ToastRender />
      <AppRouter />
    </Providers>
  </React.StrictMode>,
);
