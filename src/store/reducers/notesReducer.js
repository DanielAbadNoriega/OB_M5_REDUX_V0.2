let initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@create/note":
      return [
        ...state,
        {
          title: action.payload.title,
          text: action.payload.text,
          completed: action.payload.completed,
          id: action.payload.id,
        },
      ];

    case "@get/note":
      return state.filter((note) => note.id === action.payload.id);

    case "@toggle/note":
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              completed: !note.completed,
            }
          : note
      );

    default:
      return state;
  }
};
