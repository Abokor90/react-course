import { useState } from "react";

function Inbox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the app" },
    { id: 2, text: "Your order has shipped" },
    { id: 3, text: "Meeting at 3pm" },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  function handleToggleOpen() {
    setIsOpen(!isOpen)
  }

  function handleClearAll() {
    setMessages([]);
  }



  return (
    <div>
      <h2>Inbox</h2>
      <button onClick={handleToggleOpen}>{isOpen ? "Hide messages" : "Show messages"}</button>

      {messages.length === 0 ? (
        <p>You have no messages</p>
      ) : (
        <p>You have {messages.length} messages</p>
      )}

      {isOpen && (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>            
          ))}
        </ul>
      )}

      {messages.length > 0 && (
        <button onClick={handleClearAll}>Clear all</button>
      )}
    </div>
  );
}

export default Inbox;