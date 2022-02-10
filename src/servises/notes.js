import axios from 'axios'

const baseURL = 'https://stormy-falls-60730.herokuapp.com/api/notes'

export const getAll = () => axios.get(baseURL)

export const create = newNote => {
  const request = axios.post(baseURL, newNote)
  return request.then(response =>
    console.log('New note added: ', response.data))
}
