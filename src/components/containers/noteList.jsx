import React, { useState } from "react";
import { useSelector } from "react-redux";
import Note from "../pure/note";

const NoteList = () => {
  const notes = useSelector((state) => {
    console.log("[ NotesForm - State ] State: ", state.notesState);
    return state.notesState;
  });

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="col-6 mx-auto">
      <div className="list-group col-6 col-md-6 mt-2 mb-2 mx-auto">
        {notes.length > 0 ? (
          notes.map((note) => (
            <button
              key={note.id}
              type="button"
              className={`list-group-item list-group-item-action ${
                isActive ? "active" : ""
              }`}
              aria-current="true"
              onClick={() => setIsActive(!isActive)}
            >
              <Note note={note}></Note>
            </button>
          ))
        ) : (
          <h2 className="text-center mt-3">CREATE NEW NOTES</h2>
        )}
      </div>
    </div>
  );
};

export default NoteList;
