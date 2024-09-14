import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
 
  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
    console.log(count)
  }


  return (
    <>
      <input type="text" onChange={function(e) {
        setInputValue(e.target.value);
      }} />
      <p>Sum from 1 to {inputValue} is {count}</p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter {counter}</button>
    </>
  )
}

export default App
