import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Container } from './Container';

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

export const Footer = () => {
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
