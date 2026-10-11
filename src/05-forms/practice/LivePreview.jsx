import { useState } from "react";

function LivePreview() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} placeholder="Name" />
      <input value={city} onChange={handleCityChange} placeholder="City" />

      <p>{name} from {city}</p>  
      <p>Characters: {name.length}</p>
    </div>
  );
}

export default LivePreview;