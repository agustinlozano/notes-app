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

export default Note
