import { MdDeleteForever } from "react-icons/md"; // React icons delete icon.

function Notes({ id, text, date, handleDeleteNote }) {
    return (
        <div className="note">
            {
                // Holds the content of the note.
            }
            <span>{text}</span> 

            {
                // Holds the date and the delete elements.
            }
            <div className="note-footer"> 
                <small>{date}</small>            
                {
                    // Delete icon.
                }
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id) }/>  
            </div> 
        </div>
    );
}

export default Notes;