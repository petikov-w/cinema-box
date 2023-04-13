import { Container } from '../components/Container';
import { useEffect } from 'react';


const SinglePage = () => {

    useEffect(()=>{
        document.title = "Cinema Box - ########"     
    }, [])


    return (
        <Container>
            <h1>Фильм</h1>
            <p>Это страница отдельного фильма</p>           
        </Container>        
    )
}

export {SinglePage}