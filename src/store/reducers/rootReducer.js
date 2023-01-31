import { combineReducers } from "redux";
import { filterNotes } from "./filterReducer";
import { notesReducer } from "./notesReducer";


export const rootReducer = combineReducers({
  notesState: notesReducer,
  filterState: filterNotes,
})