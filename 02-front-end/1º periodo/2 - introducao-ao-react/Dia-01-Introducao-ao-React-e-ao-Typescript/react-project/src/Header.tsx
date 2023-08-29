import { calc } from './utils/age';

function Header() {
  const name = 'Jorde de Jesus Cardoso';
  const bd = '17/06/1991';
  const age = calc(bd);
  const role = 'Fronte-end';
  return (
    <header>
      <img src="https://avatars.githubusercontent.com/u/133919477?v=4" alt="" />
      <h1>
        {`${name}, Idade ${age} anos`}
      </h1>
      <h2>{role}</h2>
      <h3>&quot;Feito é melhor que perfeito e não entregue!&quot;</h3>
    </header>
  );
}

export default Header;
