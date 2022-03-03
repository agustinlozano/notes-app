import Note from './Note'

const Notes = ({ notes }) => {
  return (
    <div className='notes shadow'>
      {
        notes.map(note =>
          <Note
            key={note.id}
            content={note.content}
            username={note.user.username}
          />
        )
      }
    </div>
  )
}

export default Notes
