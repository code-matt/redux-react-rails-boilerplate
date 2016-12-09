import React, { Component } from 'react'
import {Link} from 'react-router'
import './dashboard.css'
import Tooltip from 'react-mdl/lib/Tooltip'
import Links from '../shared/links'

import VisibleLoginForm from '../../redux/containers/login'
import FavoriteCard from './search/favorites/favorite-card'
import SearchForm from './search/search-form'

import VisibleReduxTree from '../../redux/containers/redux-tree'

class Dashboard extends Component {

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
      <div className='container'>
        <div className='App App-header'>
          <div className='row'>
            <div className='col-md-7'>
              <Links />
              <div className='row'>
                {this.props.token
                  ? <div>
                    <button onClick={this.handleLogout.bind(this)} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>Logout</button>
                  </div>
                  : <VisibleLoginForm />
                }
              </div>
              <br />
              <div className='row'>
                <SearchForm
                  valueChangeCB={this.handleValueChange.bind(this)}
                  searchCB={this.handleSearch.bind(this)}
                  appData={this.props.appData} />
              </div>
              {this.props.favorites.length > 0
                ? <div className='row'>
                  <div className='results'>
                    <ul className='demo-list-control mdl-list'>
                      { this.renderFavorites(this.props.favorites) }
                    </ul>
                  </div>
                </div>
                : <div className='searchErr'><strong>No search results found, try again...</strong></div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
