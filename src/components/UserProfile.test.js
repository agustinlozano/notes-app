import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import UserProfile from './UserProfile'

describe('<UserProfile/>', () => {
  let component
  const note = {
    content: 'This is a test note',
    importance: true,
    user: {
      username: 'CatitoX',
      name: 'Cato',
      id: '620d2d626c5e53e86226d47c'
    }
  }
  const mockHandler = jest.fn()

  beforeAll(() => {
    component = render(
      <UserProfile
        user={note.user}
        handleUser={mockHandler}
      />
    )
  })

  test('renders username and logout works correctly', () => {
    component.getByText('CatitoX')
    component.getByText('logged in')

    const button = component.getByText('logout')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
