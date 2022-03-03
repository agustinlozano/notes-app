import propTypes from 'prop-types'

const ImportanceToggle = ({ setShowAll, showAll }) =>
  <div>
    <button
      onClick={() => setShowAll(!showAll)}
      className='importance-toggle shadow'
      id='btn'
    >
      show {showAll ? 'important' : 'all'}
    </button>
  </div>

ImportanceToggle.propTypes = {
  setShowAll: propTypes.func.isRequired,
  showAll: propTypes.bool.isRequired
}

export default ImportanceToggle
