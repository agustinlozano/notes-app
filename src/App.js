import Note from './components/Note'

function App({ notes }) {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <ul>
        {
          notes.map(note => 
            <Note key={note.id} note={note} />
          )
        }
      </ul>
    </div>
  )
}

export default App
