import { useState, useRef } from 'react'
import NoteContent from './NoteContent.js'
import NoteImportance from './NoteImportance.js'
import Toggleable from './Toggleable'
import propTypes from 'prop-types'

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('')
  const [significance, setSignificance] = useState('true')
  const toggleableRef = useRef()

  const handleContent = event => {
    setNewNote(event.target.value)
  }

  const hanldeImportance = event =>
    setSignificance(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      importance: significance === 'true'
    }

    addNote(noteObject)
    setNewNote('')
    toggleableRef.current.toggleVisibility()
  }

  return (
    <Toggleable buttonLabel='new note' ref={toggleableRef}>
      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit} className='note-form'>
        <NoteContent
          note={newNote}
          handleChange={handleContent}
        />
        <NoteImportance
          significance={significance}
          handleChange={hanldeImportance}
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

NoteForm.propTypes = {
  addNote: propTypes.func.isRequired
}

export default NoteForm
