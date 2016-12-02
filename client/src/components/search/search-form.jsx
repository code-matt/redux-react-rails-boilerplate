import React, { Component } from 'react'
import './search-form.css'

class SearchForm extends Component {

  constructor () {
    super()
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    event.preventDefault()
    this.props.searchCB()
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'search')
  }

  render () {
    return (
      <div className='searchform' id='tt3'>
        <div className='mdl-tooltip' data-mdl-for='tt3'>
          I am a regular component named SearchForm. Dashboard
          is my owner and I receive props provided by Redux
          through it. I cannot dispatch actions but I can tell
          the Dashboard to! Find me in /components/search/search-form.jsx
        </div>
        <strong>Search Favorite Things</strong>
        <form action='#'>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input onChange={this.handleValueChange} id='searchInput' className='mdl-textfield__input' type='text' />
            <label className='mdl-textfield__label' htmlFor='searchInput'>Query</label>
          </div>
          <br />
        </form>
        <button onClick={this.handleSearch}className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Search!
        </button>
      </div>
    )
  }
}

export default SearchForm
