import styled from "styled-components";

export const CardsWrapper = styled.div`          
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 0.8rem;
    justify-content: space-between;
    margin-left: -25px;

    @media (max-width: 500px) {
        justify-content: center;
    }
`