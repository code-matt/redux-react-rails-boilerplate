import React, { Component } from 'react'
import Textfield from 'react-mdl/lib/Textfield'
import Button from 'react-mdl/lib/Button'
import Tooltip from 'react-mdl/lib/Tooltip'
import Spinner from 'react-mdl/lib/Spinner'

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

  isLoading () {
    if (this.props.appData.search.loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Button onClick={this.handleSearch} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Search!
        </Button>
      )
    }
  }

  render () {
    return (
      <div className='searchform' id='tt3'>
        <strong>Search Favorite Things</strong>
        <Tooltip position='left' label='I am a regular component named SearchForm. Dashboardis my owner and I receive props provided by Redux through it. I cannot dispatch actions but I can tell the Dashboard to! Find me in /components/search/search-form.jsx'>
          <form>
            <div className=''>
              <Textfield
                key={'searchInput'}
                id='searchInput'
                defaultValue='GitHub'
                onChange={this.handleValueChange}
                label=''
              />
            </div>
            <br />
            <div className='submit'>
              {
                this.isLoading()
              }
            </div>
          </form>
        </Tooltip>
      </div>
    )
  }
}

export default SearchForm
