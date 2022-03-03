import { useState } from 'react'
import { setToken } from '../servises/notes'
import loginServices from '../servises/login'
import Toggleable from './Toggleable'
import { showNotification } from '../utils/helper-methods'

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
        <input
          className='login-field'
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          className='login-field'
          type='password'
          value={password}
          name='Password'
          placeholder='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          className='login-field'
          id='btn'
        >
          Login
        </button>
      </form>
    </Toggleable>
  )
}

export default LoginForm
