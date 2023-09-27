import { useState } from "react"
import ValidEmail from "./ValidEmail";

export function Test1() {
  const [email, setEmail] = useState('');
  const [showEmail, setShowEmail] = useState('')
  
  const getEmail= (e) => {
    const maill = e.target.value
    setEmail(maill)
  };
  const show = (e) => {
    e.preventDefault();
    try {
      setShowEmail(email)
    } finally {
      setEmail('')
    }
  }
  const reset = () => {
    setShowEmail(' ')
  }
  return (
    <>
    <form onSubmit={ show }>
        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          name="email"
          id="mail"
          value={ email }
          onChange={ getEmail }
        />
        <button type="submit" 
          data-testid="send">Enviar</button>
        <button type="reset" onClick={ reset }>Voltar</button>
        <ValidEmail  email={ showEmail }/>
      </form>
    </>
  )
}