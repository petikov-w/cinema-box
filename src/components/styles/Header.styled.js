import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);  
`;

export const Wrapper = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;   
   /* padding: 1rem 0; */
`;

export const WrapperNav = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;
   /* padding: 1rem 0; */
   min-width: 10vw;
   margin-right: 70px;
   width: 15vw;
`;

export const WrapperRight = styled.div` 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 0;
   min-width: 10vw;
`;


export const ModeSwitcher = styled.div` 
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  margin-right: -35px;
`;

