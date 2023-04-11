import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from './Container';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);  
`;

const Wrapper = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;   
   /* padding: 1rem 0; */
`;

const WrapperNav = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;
   /* padding: 1rem 0; */
   min-width: 10vw;
   margin-right: 70px;
`;

const WrapperRight = styled.div` 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 0;
   min-width: 10vw;
`;


const ModeSwitcher = styled.div` 
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const Title = styled.a.attrs({
    href: '/',
  })`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   text-decoration: none;
  `;


export const Header = () => {
    const [theme, setTheme] = useState(!localStorage.getItem('themeCinema') 
                                       ? 'light' : localStorage.getItem('themeCinema'));

    const toggleTheme = () => setTheme(theme==='light' ? 'dark' : 'light');    
    
    useEffect(()=>{
        localStorage.setItem('themeCinema', theme)
        document.body.setAttribute('data-theme', localStorage.getItem('themeCinema'))     
    }, [theme])

    return (
        <HeaderEl>
            <Container>          
                <Wrapper>
                    <Title>КИНО</Title>
                    <WrapperRight>
                        <WrapperNav>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/posts'>Blog</NavLink>   
                        </WrapperNav>                                     
                        <ModeSwitcher onClick={toggleTheme}>
                            { theme==='light' ? (
                                <BsToggleOff size='18px' />
                            ) : (
                                <BsToggleOn size='18px' />     
                            ) }
                        </ModeSwitcher>  
                    </WrapperRight>
                                         
                </Wrapper>
            </Container>            
        </HeaderEl>
    );
};
