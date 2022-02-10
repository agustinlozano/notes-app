import { useEffect, useState } from 'react'
import Form from './components/Form'
import ImportanceToggle from './components/ImportanceToggle'
import Notes from './components/Notes'
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

  const handleAddNote = (event) => {
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
    : notes.filter(note => note.importance)

  return (
    <div className='App'>
      <h1>Notes App</h1>
      <ImportanceToggle
        setShowAll={setShowAll}
        showAll={showAll}
      />
      <Notes notes={notesToShow} />
      <Form
        note={newNote}
        addNote={handleAddNote}
        handler={handleNoteChange}
      />
    </div>
  )
}

export default App
