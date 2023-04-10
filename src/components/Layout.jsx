import { NavLink, Outlet } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';


const Main = styled.div` 
     min-height: calc(95vh - 85px - 22px);
     padding-top: 1.5rem 0;    
`;

const Layout = () => {
    return (
        <>
            <Header />           
            <Main>
                <Outlet />   
            </Main>                  
            <Footer />           
        </>
    );
};

export { Layout };
 