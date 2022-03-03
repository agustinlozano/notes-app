import propTypes from 'prop-types'

const Note = ({ content, user }) => {
  const username = user
    ? user.username
    : 'someone'

  return (
    <>
      <li className='bold-text'>{content}</li>
      <p>By {username}</p>
    </>
  )
}

Note.propTypes = {
  user: propTypes.object.isRequired,
  content: propTypes.string.isRequired
}

export default Note
