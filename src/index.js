import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import { Global } from './components/Globals';
import App from './App';

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
