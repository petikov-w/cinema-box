import styled from "styled-components";

export const CardBox = styled.div`
    background-image: url(${props => props.bg}); 
    background-repeat: no-repeat;    
    background-size: cover;   
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 0.5rem;
    width: 13rem;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;    
    margin-bottom: 20px; 
    &:hover {
      transform: scale(1.05);
    }
`;