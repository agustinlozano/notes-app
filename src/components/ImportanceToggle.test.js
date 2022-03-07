import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import ImportanceToggle from './ImportanceToggle'

describe('<ImportanceToggle/>', () => {
  let component
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <ImportanceToggle
        setShowAll={mockHandler}
        showAll={false}
      />
    )
  })

  test('at the start renders important notes and then clicking renders all of them', () => {
    const button = component.getByText('show all')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)

    component = render(
      <ImportanceToggle
        setShowAll={mockHandler}
        showAll
      />
    )

    component.getByText('show important')
  })
})
