import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="text-foreground bg-background">
      <App />
    </main>
  </React.StrictMode>
);