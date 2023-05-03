import { Cards } from '../components/Cards';
import { Container } from '../components/styles/Container.styled';
import { useState, useEffect } from 'react';
import { api_query } from '../components/Api';
// import styled from 'styled-components';



const CatalogPage = () => {

    const [ films, setFilms ] = useState([])
    const [ pagesCount, setPagesCount ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)

    useEffect(()=>{
        document.title = "Cinema Box - Каталог";
        api_query(currentPage).then((data) => {
            setFilms(data.films), setPagesCount(data.pagesCount)});     
    }, [])

    // console.log("Список фильмов: ", films)    
    return (        
        <Container>
            <h1>Каталог</h1>            
            {films.length ? (<Cards films={films} />) : (<h3>Загрузка...</h3>)}           
        </Container>
            
        
    )
}

export {CatalogPage}