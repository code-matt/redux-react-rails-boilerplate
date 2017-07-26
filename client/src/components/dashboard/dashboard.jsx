import React, { Component } from 'react'

import VisibleLoginForm from '../../redux/containers/login'
import FavoriteCard from './search/favorites/favorite-card'
import SearchForm from './search/search-form'

import {notify} from 'react-notify-toast'

class Dashboard extends Component {

  componentDidUpdate () {
    var routerLocationState = this.props.location.state
    if (routerLocationState) {
      if (routerLocationState.authError) {
        notify.show('You must be logged in to access that page!', 'error', 2000)
      }
    }
  }

  handleValueChange (value, fieldId, propName) {
    this.props._appActions.changeData(value, fieldId, propName)
  }

  handleLogout (event) {
    event.preventDefault()
    this.props._authActions.logout()
  }

  handleSearch () {
    this.props._favActions.getFavorites(
      this.props.appData.search.searchInput
    )
  }

  renderFavorites (favorites) {
    if (favorites.length > 0) {
      return favorites.map((favorite, index) => (
        <FavoriteCard favorite={favorite} index={index} />
      ))
    } else {
      return []
    }
  }

  render () {
    return (
      <div className='dashboard'>
        {this.props.token
          ? <div className='loggedin-msg'>You are logged in.</div>
          : <VisibleLoginForm />
        }
        <br />
        <SearchForm
          valueChangeCB={this.handleValueChange.bind(this)}
          searchCB={this.handleSearch.bind(this)}
          appData={this.props.appData} />
        {this.props.favorites.length > 0
          ? <div className='favorites'>
            <ul className='favorites-list'>
              { this.renderFavorites(this.props.favorites) }
            </ul>
          </div>
          : <div className='noresults'>No search results found, try again...</div>
        }
      </div>
    )
  }
}

export default Dashboard
