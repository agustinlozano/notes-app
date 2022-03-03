import { useState, useRef } from 'react'
import Toggleable from './Toggleable'

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState()
  const toggleableRef = useRef()

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
    toggleableRef.current.toggleVisibility()
  }

  return (
    <Toggleable buttonLabel='new note' ref={toggleableRef}>
      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit} className='note-form'>
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
    </Toggleable>
  )
}

export default NoteForm
