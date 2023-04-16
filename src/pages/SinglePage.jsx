import { Container } from '../components/Container';
import { useState, useEffect } from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'


const api_noff = {
    API_KEY : "cd73c1bd-276a-4e67-9aab-fe1f28627864",       
    API_URL : "https://kinopoiskapiunofficial.tech/api/v2.2/films/"}

const ImageBox = styled.div`
overflow: hidden;
box-shadow: 0 2px 20px #e1e5ee;
border-radius: 0.5rem;
width: 20rem;
height: 500px;
margin-bottom: 2rem;
`;

const PosterFilm = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  box-shadow: var(--shadow);
`;

const BackButton = styled.button`
    padding: 0.8rem 5rem;
    background-color: #88a4c3;
    color: #2a2c2e;
    margin-bottom: 2rem; 
    border-radius: 5px;
    border: none;
`
const SingleFilmSection = styled.div`
    display: flex;
    justify-self: flex-start;
    
`
const InfoBoxLeft = styled.div`
`

const InfoBoxRight = styled.div`
    margin-left: 3rem;
`
const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SinglePage = () => {
   
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState([]);
    const goBack = () => navigate(-1);    
    const location = useLocation();
    const title = location.state.name + ' (' + location.state.year + ')';

    useEffect(()=>{
        document.title = "Cinema Box - " + location.state.name;            
    }, [])

    useEffect(() => {
        fetch(api_noff.API_URL + id, {
            headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
            .then((responce) => responce.json())
            .then(data => setFilm(data))    
    }, [id]);

    return (
        
        <Container>
            <h1>{title}</h1>
            <SingleFilmSection>
                <InfoBoxLeft>
                    <ImageBox>
                        <PosterFilm src={film.posterUrl}></PosterFilm>               
                    </ImageBox>
                    <BackButton onClick={goBack}>Назад</BackButton> 
                </InfoBoxLeft>  
                <InfoBoxRight>
                    <h5>Краткое содержание: </h5>
                    <p>{film.description}</p>
                    <h5>Год производства : <span style={{color:"blue"}}>{film.year}</span></h5>
                </InfoBoxRight>
            </SingleFilmSection>
          
            
            
        </Container>        
    )
}

export {SinglePage}