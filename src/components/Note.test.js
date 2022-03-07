import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Note from './Note'

// const notes = [
//   {
//     id: '1',
//     content: 'HTML is easy',
//     importantance: true,
//     user: {
//       username: 'CatitoX',
//       name: 'Cato',
//       id: '620d2d626c5e53e86226d47a'
//     }
//   },
//   {
//     id: '2',
//     content: 'Browser can execute only JavaScript',
//     importantance: false,
//     user: {
//       username: 'MobBebe',
//       name: 'Bebe',
//       id: '620d2d626c5e53e86226d47b'
//     }
//   },
//   {
//     id: '3',
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     importantance: true,
//     user: {
//       username: 'Ninito',
//       name: 'Gordo Gris',
//       id: '620d2d626c5e53e86226d47c'
//     }
//   }
// ]

describe('<Note/>', () => {
  const note = {
    content: 'This is a test note',
    importance: true,
    user: {
      username: 'CatitoX',
      name: 'Cato',
      id: '620d2d626c5e53e86226d47c'
    }
  }
  let component

  beforeEach(() => {
    component = render(
      <Note
        user={note.user}
        content={note.content}
      />)
  })

  test('renders content', () => {
    component.getByText('This is a test note')
    component.getByText(/CatitoX/)
  })

  test('if there is no user then render "someone"', () => {
    const note = {
      content: 'This is a test note without user',
      importance: true
    }

    const component = render(
      <Note
        user={note.user}
        content={note.content}
      />)

    component.getByText('This is a test note without user')
    component.getByText(/someone/)
  })
})
