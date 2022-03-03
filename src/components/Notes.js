import Note from './Note'

const Notes = ({ notes }) => {
  <div className='notes shadow'>
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
}

export default Notes
