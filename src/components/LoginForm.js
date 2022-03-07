import { useState } from 'react'
import { setToken } from '../services/notes'
import loginServices from '../services/login'
import Toggleable from './Toggleable'
import { showNotification } from '../utils/helper-methods'
import propTypes from 'prop-types'

const LoginForm = ({ handleUser, hanlderNotification }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const hanldeLogin = async (event) => {
    event.preventDefault()
    const newNotification = { content: 'You have logged successfully', type: 'success-notification' }

    try {
      const user = await loginServices.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      showNotification(hanlderNotification, newNotification)
      setToken(user.token)
      handleUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      newNotification.content = 'Incorrect username or password'
      newNotification.type = 'failure-notification'

      showNotification(hanlderNotification, newNotification)
      console.error(error.message)
    }
  }

  return (
    <Toggleable buttonLabel='show login'>
      <form onSubmit={hanldeLogin} className='login'>
        <label htmlFor='Username'>
          <input
            className='login-field'
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label htmlFor='Password'>
          <input
            className='login-field'
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button
          className='login-field'
          type='submit'
          id='btn'
        >
          Login
        </button>
      </form>
    </Toggleable>
  )
}

LoginForm.propTypes = {
  handleUser: propTypes.func.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default LoginForm
