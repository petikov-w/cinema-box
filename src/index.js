import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {createRoot} from "react-dom/client";
import './index.css'
import App from './App';
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
.active {
  color: var(--colors-active-nav);
}
`

const root  = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
