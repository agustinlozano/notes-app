const Form = ({ note, addNote, handler }) => {
  return (
    <form onSubmit={addNote}>
      <input
        value={note}
        onChange={handler}
      />
      <button type='submit'>save</button>
    </form>
  )
}

export default Form
