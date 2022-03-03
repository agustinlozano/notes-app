const Note = ({ content, username }) => {
  return (
    <>
      <li className='bold-text'>{content}</li>
      <p>By {username}</p>
    </>
  )
}

export default Note
