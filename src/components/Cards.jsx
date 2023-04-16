import {Card} from './Card'
// import {Card} from './Card'
import styled from 'styled-components';

const StyledWrapper = styled.div`          
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 0.8rem;
    justify-content: space-between;
    margin-left: -25px;

    @media (max-width: 500px) {
        justify-content: center;
    }
`

export const Cards = (props) => {
  const { films } = props;
  console.log("Список фильмов: ", films) 
  return (
      <StyledWrapper>
        {films.map((film) => (
          <Card key={film.filmId} {...film} />
        ))}
      </StyledWrapper>
  );
}
