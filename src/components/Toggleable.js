import { useState } from 'react'

const Toggleable = ({ children, buttonLabel }) => {
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          onClick={() => setVisible(true)}
          id='btn'
        >{buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button
          onClick={() => setVisible(false)}
          id='btn'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Toggleable
