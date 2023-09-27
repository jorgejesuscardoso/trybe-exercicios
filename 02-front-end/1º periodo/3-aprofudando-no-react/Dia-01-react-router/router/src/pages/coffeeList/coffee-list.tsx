// src/pages/coffee-list/index.tsx

import { Link } from 'react-router-dom';
import { coffeeList } from '../../data';
import { Component } from '../home/useNavigateHome';

function CoffeeList() {
  return (
    <div>
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <Link to={ `/coffees/${coffee.slug}` } key={ coffee.id }>
                <li>{ coffee.title }</li>
              </Link>
            ))
          }
          <Component />
        </ul>
      </main>
    </div>
  )
}

export default CoffeeList;
