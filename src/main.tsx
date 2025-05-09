import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <MainLayout>
        <App />
      </MainLayout>
    </StrictMode>
  </BrowserRouter>,
);
