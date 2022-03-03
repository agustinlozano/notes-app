const NoteImportance = ({ significance, handleChange }) =>
  <div>
    <p>Is your note Important?</p>
    <div>
      <input
        type='radio'
        name='important'
        value='true'
        checked={significance === 'true'}
        onChange={handleChange}
      />
      <label htmlFor='important'>Important</label>
    </div>
    <div>
      <input
        type='radio'
        name='notImportant'
        value='false'
        checked={significance === 'false'}
        onChange={handleChange}
      />
      <label htmlFor='notImportant'>Not Important</label>
    </div>
  </div>

export default NoteImportance
