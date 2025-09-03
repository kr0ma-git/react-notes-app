import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} /> // For each note, render a note.
            ))}
            <AddNote handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} />
        </div>
    ); 
}

export default NotesList;