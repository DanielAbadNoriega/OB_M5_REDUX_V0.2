import { combineReducers } from "redux";
import { filterNote } from "../actions/notesActions";
import { notesReducer } from "./notesReducer";


export const rootReducer = combineReducers({
  notesState: notesReducer,
  filterState: filterNote,
})