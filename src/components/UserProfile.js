import { setToken } from '../services/notes'
import propTypes from 'prop-types'

const UserProfile = ({ user, handleUser }) => {
  const handleLogout = () => {
    handleUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return (
    <div>
      <p><b>{user.username}</b> logged in</p>
      <button
        onClick={handleLogout}
        id='btn'
      >
        logout
      </button>
    </div>
  )
}

UserProfile.propTypes = {
  user: propTypes.object.isRequired,
  handleUser: propTypes.func.isRequired
}

export default UserProfile
