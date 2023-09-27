import { ForecastType } from '../assets/Forecast';
import './Card.css';
import icons from '../assets/Icon';

type CardProps = {
  data: ForecastType;
};

function Card(forecast: CardProps) {
  const { data } = forecast;
  const { weekday, date, temp, weather } = data;
  return (
    <div className="card">
      <h2>{weekday}</h2>
      <p>{date}</p>
      {weather && <img src={ icons[weather] } alt="Imagem do clima." />}
      {!weather && <img src={ icons.nan } alt="Não disponivel." width={ 80 } />}
      <h2>{temp}</h2>
      <p>{weather}</p>
    </div>
  );
}

export default Card;
