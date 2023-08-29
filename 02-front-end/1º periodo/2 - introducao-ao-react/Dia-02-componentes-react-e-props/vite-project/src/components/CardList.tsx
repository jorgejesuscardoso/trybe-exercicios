import { cast } from '../assets/Cast';
import Card from './Card';
import './CardList.css';

function CardList() {
  return (
    <div className="card__list">
      <Card data={ cast[0] } />
      <Card data={ cast[1] } />
      <Card data={ cast[2] } />
      <Card data={ cast[3] } />
    </div>
  );
}

export default CardList;
