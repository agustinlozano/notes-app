import Note from './Note'

const Notes = ({ notes }) => {
  return (
    <div className='notes shadow'>
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

export default Notes
