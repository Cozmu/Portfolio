import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import PortfolioProvider from './context/PortfolioProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PortfolioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortfolioProvider>
  </React.StrictMode>,
);
