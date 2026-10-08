// TODO: import useState from "react"
import { useState } from "react";

function Counter() {
  // TODO 1: create a state variable called count, starting at 0.
  const [count, setCount] = useState(0);

  // function IncreaseButton() {
  //   setCount(count + 1)
  // }

  // function decreseButton() {
  //   setCount(count - 1);
  // }

  // function resetButton() {
  //   setCount(0);
  // }

  function handleUpdate(action) {
    if (action === 'increase') {
      setCount(count + 1);
    } else if (action === 'decrease') {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  // TODO 2: return JSX showing the count and THREE buttons.
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleUpdate('increase')}>Increase 1</button>
      <button onClick={() => handleUpdate('decrease')}>Decrease 1</button>
      <button onClick={() => handleUpdate('reset')}>Reset</button>
    </div>
  );
}

export default Counter;