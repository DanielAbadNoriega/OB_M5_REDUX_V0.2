import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// REDUX
import { Provider } from "react-redux";

// STORE
import { noteStore } from "./store/config/storeConfig";
import { createNote, filterNote } from "./store/actions/notesActions";

// STYLES
import "bootstrap/dist/css/bootstrap.css";

const noteAppStore = noteStore();
noteAppStore.subscribe(() =>
  console.log("[ noteAppStore ] State: ", noteAppStore.getState())
);
noteAppStore.dispatch(filterNote("ALL"));
noteAppStore.dispatch(createNote("Note 1", "My note 1"));
noteAppStore.dispatch(createNote("Note 2", "My note 2"));
noteAppStore.dispatch(createNote("Note 3", "My note 3"));
noteAppStore.dispatch(createNote("Note 4", "My note 4"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={noteAppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
