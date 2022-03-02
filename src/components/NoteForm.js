import { useState } from 'react'
import Toggleable from './Toggleable'

const NoteForm = ({ addNote, handleLogout }) => {
  const [newNote, setNewNote] = useState()

  const handleChange = event => {
    setNewNote(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote
    }

    addNote(noteObject)
    setNewNote('')
  }

  return (
    <Toggleable buttonLabel='new note'>
      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newNote}
          onChange={handleChange}
        />
        <button
          type='submit'
          id='btn'
        >
          save
        </button>
      </form>
      <div>
        <button onClick={handleLogout}>
          logout
        </button>
      </div>
    </Toggleable>
  )
}

export default NoteForm
