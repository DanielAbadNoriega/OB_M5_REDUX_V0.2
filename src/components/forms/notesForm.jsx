import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../store/actions/notesActions";

const NotesForm = () => {

  const dispatch = useDispatch();

  const newNote = (e) => {
    e.preventDefault();
    const { title, text } = e.target;
    if(title.value !== "" && text.value !== ""){
      dispatch(createNote(title.value, text.value));
      title.value = "";
      text.value = "";
      return;
    }
    return alert("Write the title and text of the note.")
  }

  return(
    <div className="d-flex flex-column align-items-center justify-content-center mt-2 gap-2 col-12 col-lg-12">
      <h1>CREATE NOTE</h1>
      <form className="d-flex flex-sm-column align-items-center justify-content-center col-8 col-sm-6 gap-3" onSubmit={newNote}>
        {/* TITLE */}
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="basic-addon1">
            TITLE
          </span>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Write title"
            aria-label="title"
            aria-describedby="basic-addon1"
            autoFocus
          />
        </div>
        {/* TEXT */}
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="basic-addon1">
            TEXT
          </span>
          <input
            type="text"
            name="text"
            className="form-control"
            placeholder="Write some text"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <button className="btn btn-success mb-2" type="submit"> NEW NOTE </button>
      </form>
    </div>
  );
};

export default NotesForm;
