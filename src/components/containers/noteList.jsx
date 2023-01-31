import React, { useState } from "react";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => {
    console.log("[ NotesForm - State ] State: ", state.notesState);
    return state.notesState;
  });

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="col-6 mx-auto">
      {notes.length > 0 ? (
        <div className="list-group col-6 col-md-6 mt-2 mx-auto">
          <button
            type="button"
            className={`list-group-item list-group-item-action ${
              isActive ? "active" : ""
            }`}
            aria-current="true"
            onClick={() => setIsActive(!isActive)}
          >
            The current button
          </button>
        </div>
      ) : (
        <h2 className="text-center mt-3">CREATE NEW NOTES</h2>
      )}
    </div>
  );
};

export default NoteList;
