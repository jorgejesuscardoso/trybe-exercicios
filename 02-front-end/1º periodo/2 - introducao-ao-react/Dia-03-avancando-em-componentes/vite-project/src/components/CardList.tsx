import Container from '../assets/Container';
import { cast } from '../assets/Forecast';
import Card from './Card';
import './CardList.css';

function CardList() {
  return (
    <Container>
      <div className="card__list">
        {
          cast.map((forecast) => (
            <Card
              key={ forecast.date }
              data={ forecast }
            />
          ))
        }
      </div>
    </Container>
  );
}

export default CardList;
