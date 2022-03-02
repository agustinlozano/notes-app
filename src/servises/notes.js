import axios from 'axios'

const baseURL = 'http://localhost:3001/api/notes'
let token = null

export const setToken = newToken => {
  token = `Bearer ${newToken}`
}
export const getAll = () => axios.get(baseURL)

export const create = newNote => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.post(baseURL, newNote, config)

  return request.then(response =>
    console.log('New note added: ', response.data))
}
