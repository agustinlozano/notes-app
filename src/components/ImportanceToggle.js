const ImportanceToggle = ({ setShowAll, showAll }) => {
  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'importance' : 'all'}
      </button>
    </div>
  )
}

export default ImportanceToggle
