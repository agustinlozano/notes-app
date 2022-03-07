import { useEffect, useState } from 'react'
import { getAll, create, setToken } from './services/notes'
import ImportanceToggle from './components/ImportanceToggle'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Notes from './components/Notes'
import Notification from './components/Notification'
import UserProfile from './components/UserProfile'
import { showNotification } from './utils/helper-methods'

function App () {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [user, setUser] = useState(false)
  const [notification, setNotification] = useState({ content: '', type: '' })

  useEffect(() => {
    const newNotification = { content: '', type: '' }

    getAll()
      .then(response => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          setToken(user.token)
        }
        setNotes(response.data)
      })
      .catch(err => {
        newNotification.content = 'Error: notes cannot be accessed'
        newNotification.type = 'failure-notification'

        showNotification(setNotification, newNotification)
        console.error(err)
      })
  }, [])

  const addNote = noteObject => {
    const newNotification = {
      content: 'A new note has been added',
      type: 'success-notification'
    }

    create(noteObject)
      .then(() => {
        showNotification(setNotification, newNotification)
        setNotes(notes.concat(noteObject))
      })
      .catch(error => {
        newNotification.content = 'The note cannot be added'
        newNotification.type = 'failure-notification'

        showNotification(setNotification, newNotification)
        console.error(error.response.data)
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.importance)

  return (
    <div className='App'>
      <h1>Wizard's Notes</h1>
      <Notification
        content={notification.content}
        type={notification.type}
      />
      {
        user
          ? (
            <>
              <UserProfile
                user={user}
                handleUser={setUser}
              />
              <NoteForm addNote={addNote} />
            </>
            )
          : <LoginForm
              handleUser={setUser}
              hanlderNotification={setNotification}
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
