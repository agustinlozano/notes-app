import { useState, useImperativeHandle, forwardRef } from 'react'
import propTypes from 'prop-types'

const Toggleable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          onClick={toggleVisibility}
          className='btn'
        >{buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button
          onClick={toggleVisibility}
          className='btn'
        >
          Cancel
        </button>
      </div>
    </div>
  )
})

Toggleable.displayName = 'Toggleable'

Toggleable.propTypes = {
  buttonLabel: propTypes.string.isRequired
}

export default Toggleable
