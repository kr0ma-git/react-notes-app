import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Create a note with the blue note! This project is not mine! All credits go to Chris Blakely on YouTube!",
      date: "9/3/2025"
    }
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => { // Save notes to local storage everytime it changes to restore previous session notes even if the browser is closed.
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes)); // Good practice to stringify our data first before saving into local storage. Local storage refers to a small database within the browser, not the actual user's local storage.
  }, [notes]); // Dependency array, anytime that it changes, it will trigger the useEffect() function and the entire code within it, saving the file again.

  useEffect(() => { // Retrieve any notes saved into local storage when the app loads.
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')); // Parsing the JSON into JavaScript object.

    if (savedNotes) { // Check if any notes were saved.
      setNotes(savedNotes);
    }
  }, []); // When the dependency array is empty, the useEffect() will only run once and load everything on first load.

  const addNote = (text) => { // Adds the text from user input.
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString // Convert to local date format.
    }
    const newNotes = [...notes, newNote]; // Create a new array instead of updating the current array. "...notes" to copy the array, "newNote" to add the newNote in the array.
    setNotes(newNotes); // Components re-render and updates the data.
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(() => notes.id !== id); // Filtering from the notes. Keeping everything that isn't the note to be deleted.
    setNotes(newNotes);
  }

  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}> {/* This is a template string which will create use the className 'dark-mode' if darkMode is true */}
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        </div>
      </div>
    </>
  );
};

export default App