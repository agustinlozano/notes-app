import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import NoteForm from './NoteForm'

describe('<NoteForm/>', () => {
  let component
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <NoteForm
        addNote={mockHandler}
      />
    )
  })

  test('at the start, form fields are no rendered', () => {
    component.getByText('new note')
  })

  test('clicking on the new note button must show the note form fields', () => {
    const newNoteButton = component.getByText('new note')
    fireEvent.click(newNoteButton)

    component.getByText('Create a new note')
    component.getByText('Is your note Important?')
    component.getByText('Important')
    component.getByText('save')
  })

  test('after submitting the form with the fields, prop event handler is called once and note content is rendered', () => {
    const saveButton = component.getByText('new note')
    fireEvent.click(saveButton)

    const form = component.container.querySelector('form')
    const textArea = component.container.querySelector('textarea')

    fireEvent.change(textArea, {
      target: { value: 'This note is written by tests' }
    })

    fireEvent.submit(form)
    expect(mockHandler).toHaveBeenCalledTimes(1)
    expect(mockHandler.mock.calls[0][0].content).toBe('This note is written by tests')
  })
})
