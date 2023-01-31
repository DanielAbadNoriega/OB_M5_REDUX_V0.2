import './App.css';
import NoteList from './components/containers/noteList';
import NotesForm from './components/forms/notesForm';
import FilterButtons from './components/pure/filterButtons';

function App() {
  return (
    <div className="App">
      <NotesForm></NotesForm>
      <NoteList></NoteList>
      <FilterButtons></FilterButtons>
    </div>
  );
}

export default App;
