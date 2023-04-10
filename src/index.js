import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body[data-theme='dark'] {
  --colors-text: hsl(0, 0%, 100%);
  --colors-link: #cbceb7;
  --colors-active-nav: yellowgreen;
  --colors-bg: hsl(207, 26%, 17%);
  --colors-ui-base: hsl(209, 23%, 22%);
  --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
}
body[data-theme='light'] {
  --colors-text: hsl(200, 15%, 8%);
  --colors-link: #1f45b6;
  --colors-active-nav: rgb(12, 159, 29);
  --colors-bg: hsl(0, 0%, 98%);
  --colors-ui-base: hsl(0, 0%, 100%);
  --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.active {
  color: var(--colors-active-nav);
}
`

const root = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
