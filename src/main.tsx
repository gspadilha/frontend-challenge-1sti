import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import './main.css';

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
