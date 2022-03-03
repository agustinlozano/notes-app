import { useState, useImperativeHandle, forwardRef } from 'react'

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
          id='btn'
        >{buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button
          onClick={toggleVisibility}
          id='btn'
        >
          Cancel
        </button>
      </div>
    </div>
  )
})

export default Toggleable
