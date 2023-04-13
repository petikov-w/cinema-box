import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`        
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 500px) {
        justify-content: center;
    }
`
const CatalogPage = () => {

    useEffect(()=>{
        document.title = "Cinema Box - Каталог"     
    }, [])

    return (
        <Container>
            <h1>Каталог</h1>
            <StyledWrapper> 
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </StyledWrapper>
        </Container>
            
        
    )
}

export {CatalogPage}