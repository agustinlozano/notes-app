import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('<LoginForm/>', () => {
  let component
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <LoginForm
        handleUser={() => {}}
        hanlderNotification={mockHandler}
      />
    )
  })

  test('renders fields and login button can be clicked', () => {
    component.getByPlaceholderText('Username')
    component.getByPlaceholderText('Password')
    component.getByText('Cancel')

    const button = component.getByText('Login')
    fireEvent.click(button)

    // expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
