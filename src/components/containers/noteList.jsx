import React from "react";
import { useSelector } from "react-redux";
import Note from "../pure/note";

const NoteList = () => {
  const { notesState, filterState } = useSelector((state) => {
    console.log("[ NotesForm - State ] State: ", state);
    return state;
  });

  const notes = notesState;
  const filter = filterState;

  const getNotesFiltered = (notes, filter) => {
    console.log(filter);
    switch (filter) {
      case "ALL":
        return notes;
      case "COMPLETED":
        return notes.filter((note) => note.completed);
      case "UNCOMPLETED":
        return notes.filter((note) => !note.completed);
      default:
        return notes;
    }
  };

  return (
    <div className="col-6 mx-auto">
      <div className="list-group col-6 col-md-6 mt-2 mb-2 mx-auto">
        {notes.length > 0 ? (
          getNotesFiltered(notes, filter).map((note) => (
            <button
              key={note.id}
              type="button"
              className="list-group-item list-group-item-action "
              aria-current="true"
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
