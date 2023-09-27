import { useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Button } from "./components/button"


function App() {
  const [ counter, setCounter ] = useState(0);

  function handleClick(messageText: string) {
    alert(messageText)
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    
  }
  function handleClickCounter() {
    setCounter(counter + 1) 
    
  }

  

  return (
    <>
    <Header />
   <Button
    onClick={ () => handleClick('Gostei') }
   >
   Clique aqui! 1
    </Button> 
   <Button
    onClick={() => handleClick('Não gostei')}
   >
   Clique aqui! 2
    </Button> 
    <input
    type="text"
    onChange={(event) => handleChange(event)}
    />

   <Button
    onClick={handleClickCounter}
   >
   { counter }
    </Button> 
    <Footer />
    </>
  )
}

export default App
