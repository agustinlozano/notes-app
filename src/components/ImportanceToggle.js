const ImportanceToggle = ({ setShowAll, showAll }) => {
  return (
    <div>
      <button
        onClick={() => setShowAll(!showAll)}
        className='importance-toggle shadow'
        id='btn'
      >
        show {showAll ? 'important' : 'all'}
      </button>
    </div>
  )
}

export default ImportanceToggle
