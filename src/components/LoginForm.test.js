import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('<LoginForm/>', () => {
  let component

  beforeEach(() => {
    component = render(
      <LoginForm
        handleUser={() => {}}
        hanlderNotification={() => {}}
      />
    )
  })

  test('renders fields', () => {
    component.getByText('show login')
    component.getByPlaceholderText('Username')
    component.getByPlaceholderText('Password')
    component.getByText('Login')
    component.getByText('Cancel')
  })

  test('can type in the fields and submit the form', () => {
    const usernameField = component.getByPlaceholderText('Username')
    const passwordField = component.getByPlaceholderText('Password')
    const form = component.container.querySelector('form')

    fireEvent.change(usernameField, {
      target: { value: 'EngineerWizard' }
    })

    fireEvent.change(passwordField, {
      target: { value: 'ThisIsMyPass' }
    })

    fireEvent.submit(form)
  })
})
