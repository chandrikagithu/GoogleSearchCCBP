// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemDetails, searchSuggestion} = props
  const {suggestion} = itemDetails

  const onSearch = () => {
    searchSuggestion(suggestion)
  }
  return (
    <li className="list">
      <p className="suggestion-name">{suggestion}</p>
      <button type="button" className="button" onClick={onSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
