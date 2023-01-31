import React from "react";
import { useDispatch } from "react-redux";
import { filterNote } from "../../store/actions/notesActions";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const filter = (filter) => {
    dispatch(filterNote(filter));
  };

  return (
    <div className="list-group list-group-horizontal col-6 col-md-6 mx-auto mb-2">
      <button
        type="button"
        className="list-group-item list-group-item-action text-center bg-light bg-gradient "
        onClick={() => filter("ALL")}
      >
        ALL
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action text-center bg-light bg-gradient "
        onClick={() => filter("COMPLETED")}
      >
        COMPLETED
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action text-center bg-light bg-gradient "
        onClick={() => filter("UNCOMPLETED")}
      >
        UNCOMPLETED
      </button>
    </div>
  );
};

export default FilterButtons;
