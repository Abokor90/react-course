import { useState } from "react";

function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddNote(text);
    setText("");
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} type="text" onChange={handleTextChange}/>
      <button>Add note</button>
    </form>
  );
}


function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );
}



function NotesApp() {
  const [notes, setNotes] = useState([
    {id: 1, text: "Note's list"},
    {id: 2, text: "Note's form"}
  ]);


  function handleAddNote(text) {
    const newNote = {id: Date.now(), text: text};
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <h2>Notes</h2>
      <NoteForm onAddNote={handleAddNote}/>
      <NoteList notes={notes}/>
    </div>
  );
}

export default NotesApp;

