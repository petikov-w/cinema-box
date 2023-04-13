import React from 'react';
import { Routes, Route } from "react-router-dom"
import styled from 'styled-components';

import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { SinglePage } from "./pages/SinglePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";



const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="films" element={<CatalogPage />} />
                    <Route path="films/:id" element={<SinglePage />} />
                    {/* <Route path="/country/:name" component={Details} */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>


    )
}

export default App
