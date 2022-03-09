import Note from './Note'
import propTypes from 'prop-types'

const Notes = ({ notes }) =>
  <div
    data-testid='notes-container'
    className='notes shadow'
  >
    {
      notes.map(note =>
        <Note
          key={note.id || note.content}
          content={note.content}
          user={note.user}
        />
      )
    }
  </div>

Notes.propTypes = {
  notes: propTypes.array.isRequired
}

export default Notes
