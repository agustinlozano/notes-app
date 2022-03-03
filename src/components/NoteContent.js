const NoteContent = ({ note, handleChange }) =>
  <textarea
    value={note}
    onChange={handleChange}
  />

export default NoteContent
