import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import { ToastRender } from '@components/Toast';
import JotaiProvider from '@modules/JotaiProvider';
import './index.css';
import 'uno.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JotaiProvider>
      <ToastRender />
      <AppRouter />
    </JotaiProvider>
  </React.StrictMode>,
);
