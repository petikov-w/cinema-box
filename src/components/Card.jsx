import { CardLink } from './styles/Link.styled'
import { CardBox } from './styles/Card.styled'


export const Card = (props, bg) => {
    const {filmId, nameRu, year, rating, posterUrl} = props;
    const SSS = {
      name: nameRu,
      year: year
    }
    return (
      <CardLink to={`/films/${filmId}`} state={SSS}>
        <CardBox bg={posterUrl} />
      </CardLink>      
    );
  }

  
