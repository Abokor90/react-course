import { useState } from "react";

function EventPlayground() {
  const [ isHovered, setIsHovered ] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleClick(event) {
    console.log(event.target.textContent);
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  function handleKeyDown(event) {
    console.log(event.key);
  }
  
  

  return (
    <div>
      <div style={{padding : '20px', border: "1px solid gray"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered ? 'Hovered' : 'Not hovered'}
      </div>
      <button onClick={handleClick}>Click</button>
      <input onKeyDown={handleKeyDown} onChange={handleChange} />
    </div>
  );
}

export default EventPlayground;