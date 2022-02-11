const Form = ({ note, addNote, handler }) => {
  return (
    <form onSubmit={addNote}>
      <textarea
        value={note}
        onChange={handler}
      />
      <button
        type='submit'
        id='btn'
      >
        save
      </button>
    </form>
  )
}

export default Form
