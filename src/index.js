import React from 'react';
import ReactDOM from 'react-dom/client';
import { make as App } from './App.bs';

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
