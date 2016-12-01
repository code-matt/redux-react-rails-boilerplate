import React, { Component } from 'react'
import './search-form.css'

class SearchForm extends Component {
  render () {
    return (
      <div className='searchform' id='tt3'>
        <div className='mdl-tooltip' data-mdl-for='tt3'>
          I am a regular component named SearchForm. Dashboard
          is my owner and I receive props provided by redux 
          through it. I cannot dispatch actions but I can tell
          the Dashboard to! Find me in /components/search/search-form.jsx
        </div>
        <strong>Search Favorite Things</strong>
        <form action='#'>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input className='mdl-textfield__input' type='text' id='sample3' />
            <label className='mdl-textfield__label' htmlFor='sample3'>Query</label>
          </div>
          <br />
        </form>
        <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Search!
        </button>
      </div>
    )
  }
}

export default SearchForm