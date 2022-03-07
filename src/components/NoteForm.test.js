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

  test('after clicking on the save button, prop event handler is called once', () => {
    const newNoteButton = component.getByText('new note')
    fireEvent.click(newNoteButton)

    const saveButton = component.getByText('save')
    fireEvent.click(saveButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
