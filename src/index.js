import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import { Global } from './components/styles/Globals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Global />
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
);
