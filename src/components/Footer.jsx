import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Container } from './Container';
import { IoMoon, IoMoonOutline} from "react-icons/io5"

const FooterEl = styled.footer`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 0;
`;

// const ModeSwitcher = styled.div` 
//   color: var(--colors-text);
//   font-size: var(--fs-sm);
//   cursor: pointer;
//   text-transform: capitalize;
// `;

const Title = styled.a.attrs({
    href: '/',
  })`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   text-decoration: none;
  `;

const Copyright = styled.a.attrs({
    href: 'https://kroxdev.ru',
    target: '_blank'
  })`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   text-decoration: none;
  `;

export const Footer = (props) => {
    //const [theme, setTheme] = useState("light");

    // const toggleTheme = () => setTheme(theme==='light' ? 'dark' : 'light');

    // useEffect(()=>{
    //     document.body.setAttribute('data-theme', theme)
    // }, [theme])

    // .content {
    //     min-height: calc(100vh - 70px - 64px);
    //     padding: 1.5rem 0;
    //   }
      

    return (
        <FooterEl>
            <Container>          
                <Wrapper>
                    <Title>КИНО</Title>
                    <Copyright>© {new Date().getFullYear()} Petikov Vladimir</Copyright>                    
                </Wrapper>
            </Container>            
        </FooterEl>
    );
};
