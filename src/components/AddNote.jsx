import { useState } from "react";

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState(''); // New notes default to empty string.
    const characterLimit = 200;
    
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) { // Character limit to prevent typing after character limit has been reached.
            setNoteText(event.target.value); // Evertime the value of the textarea changes, noteText will also be updated.
        }
    };

    const handleSaveClick = () => { // Everytime the save button is clicked, the handleAddNote() function is passed the text which will be reflected to the parent components.
        if (noteText.trim().length > 0) { // trim() function removes whitespace from the start and end of the string. Then we check the length that if the length is greater than 0, there is actual text.
            handleAddNote(noteText);
            setNoteText(""); // Reset input so that the previously added message gets removed.
        }
    };

    return(
        <div className="note new">
            <textarea rows="8" columns="10" placeholder="Type to add a note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small> { /* Gives characters remaining in the textarea. */ }
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;