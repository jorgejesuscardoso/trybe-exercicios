import { ForecastType } from '../assets/Cast';
import './Card.css';

type CardProps = {
  data: ForecastType;
};

function Card(forecast: CardProps) {
  const { data } = forecast;
  console.log(data);
  const { weekday, date, image, temp, weather } = data;
  return (
    <div className="card">
      <h2>{weekday}</h2>
      <h2>{date}</h2>
      <img src={ image } alt="" />
      <h2>{temp}</h2>
      <h2>{weather}</h2>
    </div>
  );
}

export default Card;
