import React from "react";

const Note = ({ note }) => {
  return (
    <div>
      <div className="card-body">
        <h2 className="card-title my-auto mt-2 ms-2">{note.title}</h2>
        <hr></hr>
        <p className="card-text ms-2 mb-2"> {note.text}</p>
      </div>
    </div>
  );
};

export default Note;
