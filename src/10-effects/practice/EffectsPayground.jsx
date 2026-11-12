import { useState, useEffect } from "react";

function EffectPlayground() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Component appeared");
  }, []);


  useEffect(() => {
    document.title = "Count: " + count;
    console.log("Count changed to", count);
  }, [count]);

  useEffect(() => {
    console.log("Rendered");
  });

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={name} onChange={handleNameChange} type="text" placeholder="Type here" />
    </div>
  );
}

export default EffectPlayground;