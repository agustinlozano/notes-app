import { useEffect, useState } from 'react'
import NoteForm from './components/NoteForm'
import LoginForm from './components/LoginForm'
import ImportanceToggle from './components/ImportanceToggle'
import Notes from './components/Notes'
import { getAll, create, setToken } from './servises/notes'

function App () {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [user, setUser] = useState(false)

  console.log(user)

  useEffect(() => {
    getAll()
      .then(response => setNotes(response.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const addNote = noteObject => {
    create(noteObject)
      .then(() => {
        setNotes(notes.concat(noteObject))
      })
      .catch(error => {
        const message = error.response.data
        console.error(message)
      })
  }

  const handleLogout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.importance)

  return (
    <div className='App'>
      <h1>Notes App</h1>
      {
        user
          ? <NoteForm
              addNote={addNote}
              handleLogout={handleLogout}
            />
          : <LoginForm
              handleUser={setUser}
            />
      }
      <ImportanceToggle
        setShowAll={setShowAll}
        showAll={showAll}
      />
      <Notes notes={notesToShow} />
    </div>
  )
}

export default App
