// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <div className="suggestion-container">
              <ul className="list-container">
                {searchResults.map(eachSuggestion => (
                  <SuggestionItem
                    itemDetails={eachSuggestion}
                    key={eachSuggestion.id}
                    searchSuggestion={this.searchSuggestion}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
