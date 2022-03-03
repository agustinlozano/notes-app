import { setToken } from '../servises/notes'

const UserProfile = ({ user, handleUser }) => {
  const handleLogout = () => {
    handleUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return (
    <div>
      <p>{user.username} logged in</p>
      <button
        onClick={handleLogout}
        id='btn'
      >
        logout
      </button>
    </div>
  )
}

export default UserProfile
