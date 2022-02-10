import { useEffect, useState } from 'react'
import Note from './components/Note'
import { getAll, create } from './servises/notes'

function App () {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState()
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    getAll()
      .then(response => setNotes(response.data))
      .catch(err => console.error(err))
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote
    }

    create(noteObject)
      .then(() => {
        setNotes(notes.concat(noteObject))
        setNewNote('')
      })
      .catch(error => {
        const message = error.response.data
        console.error(message)
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div className='App'>
      <h1>Notes App</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(note =>
            <Note key={note.id} note={note} />
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
