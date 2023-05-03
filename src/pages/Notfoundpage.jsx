import React, {useEffect} from "react";
import { Container } from '../components/styles/Container.styled';
const NotFoundPage = () => {

    useEffect(()=>{
        document.title = "Cinema Box - Страница не найдена"     
    }, [])

    return (
        <Container>
            <h1>404 - страница не найдена</h1>
            <button>Вернуться назад</button>
        </Container>
    )
}

export {NotFoundPage}