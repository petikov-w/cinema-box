import styled from 'styled-components';

export const FooterEl = styled.footer`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div` 
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 0;
`;


export const Copyright = styled.a.attrs({
    href: 'https://kroxdev.ru',
    target: '_blank'
})`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   text-decoration: none;
  `;