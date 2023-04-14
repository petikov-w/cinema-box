import { Container } from '../components/Container';
import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'

 export const api_noff = {
        API_KEY : "cd73c1bd-276a-4e67-9aab-fe1f28627864",       
        API_URL : "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
    }

const SinglePage = () => {
   
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const goBack = () => navigate(-1);



    useEffect(()=>{
        document.title = "Cinema Box - ########"     
    }, [])

    useEffect(() => {
        fetch(api_noff.API_URL + page, {
            headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
            .then((responce) => responce.json())
            .then(data => setFilm(data))    
    }, [id]);

    // fetch(api_noff.API_URL+'/'+${id}`)
    // .then((res) => res.json())
    // .then((data) => setPost(data));


    fetch(api_noff.API_URL + page, {
        headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
        .then((responce) => responce.json())
        .then(data => (data))

    return (
        <Container>
            <h1>Фильм</h1>
            <p>Это страница отдельного фильма {id}</p>           
            <button onClick={goBack}>Назад</button>
        </Container>        
    )
}

export {SinglePage}