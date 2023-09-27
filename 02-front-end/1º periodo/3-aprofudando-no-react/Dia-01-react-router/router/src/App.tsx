// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffeeList/coffee-list';

import Coffee from './pages/coffee';
import NotFound from './pages/Not-found';
import Layout from './Components/Layout';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
        <Route path='/coffees/:coffee' element={<Coffee />} />
      </Route>
        <Route path='/*' element={ <NotFound /> } />
    </Routes>
  </>
  )
}

export default App;
