import { Card } from './Card'
import { CardsWrapper } from './styles/Cards.styled'

export const Cards = (props) => {
  const { films } = props;
  return (
      <CardsWrapper>
        {films.map((film) => (
          <Card key={film.filmId} {...film} />
        ))}
      </CardsWrapper>
  );
}
