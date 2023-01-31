let noteID = 0;

const CREATE_NOTE = "@create/note";
const GET_NOTE = "@get/note";
const FILTER = "SET_FILTER";

export const createNote = (title, text) => {
  return {
    type: CREATE_NOTE,
    payload: {
      title,
      text,
      completed: false,
      id: noteID++,
    },
  };
};

export const getNoteId = (id) => {
  return {
    type: GET_NOTE,
    payload: {
      id,
    },
  };
};

export const filterNote = (filter) => {
  return {
    type: FILTER,
    filter
  };
};
