import { useState } from 'react'
import { setToken } from '../servises/notes'
import loginServices from '../servises/login'
import Toggleable from './Toggleable'

const LoginForm = ({ handleUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const hanldeLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginServices.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      setToken(user.token)
      handleUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Toggleable buttonLabel='show login'>
      <form onSubmit={hanldeLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button>
          Login
        </button>
      </form>
    </Toggleable>
  )
}

export default LoginForm
