import './App.css';
import NoteList from './components/containers/noteList';
import NotesForm from './components/forms/notesForm';

function App() {
  return (
    <div className="App">
      <NotesForm></NotesForm>
      <NoteList></NoteList>
    </div>
  );
}

export default App;
