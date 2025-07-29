import { useState } from "react";
import '../styles/counter.css';

function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="title-counter">Counter: {count}</h1>
      <div className="button-container">
        <button onClick={increment} className="button-counter-increment">Increment</button>
        <button onClick={decrement} className="button-counter-decrement">Decrement</button>
        <button onClick={() => setCount(0)} className="button-counter-reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
