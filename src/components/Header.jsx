import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from './styles/Container.styled';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HeaderEl, Wrapper, WrapperNav, WrapperRight, ModeSwitcher } from './styles/Header.styled'
import { LogoLink } from './styles/Link.styled'


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
                    <LogoLink to='/'>КИНО</LogoLink>
                    <WrapperRight>
                        <WrapperNav>
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/films'>Каталог</NavLink>   
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
