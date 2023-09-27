import { useState } from "react";
type GreetingProps = {
  name: string;
};

let registerNumber = 0;

function Greeting({ name }: GreetingProps) {
  registerNumber = registerNumber + 1;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>{`Meu nome é ${name}!`}</h2>
      <p>{`Meu número de registro é ${registerNumber}`}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
    </div>
  );
}

export default Greeting;
