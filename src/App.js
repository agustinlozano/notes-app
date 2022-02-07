function App({ notes }) {
  console.log(notes)
  return (
    <div className="App">
      <h2>Notes App</h2>
      {
        notes.map(note => {
          return <p key={note.id}>{note.content}</p>
        })
      }
    </div>
  )
}

export default App;
