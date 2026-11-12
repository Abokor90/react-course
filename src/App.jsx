import { useState } from "react";
import Timer from "./10-effects/practice/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);


  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>{showTimer ? "Hide" : "Show"}</button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;