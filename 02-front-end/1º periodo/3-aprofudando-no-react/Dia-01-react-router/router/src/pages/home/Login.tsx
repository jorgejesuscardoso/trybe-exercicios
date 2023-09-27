import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  function handleClick() {
    if (password.length > 5) {
      navigate('/home');
    }
  }

  return (
    // ...
    <button onClick={ handleClick }>Acessar</button>
  )
}

export default Login;