import React, { Component } from 'react'

import './dashboard.css'
// import './react-treeview.css'
import logo from './logo.svg'

import VisibleLoginForm from '../../redux/containers/login'

import FavoriteCard from '../favorites/favorite-card'

import SearchForm from '../search/search-form'
import FavoriteForm from '../addfav/addfav-form'

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
              <div className='row'>
                <div className='mdl-tooltip' data-mdl-for='tt2'>
                  Everything you see is inside a container named Dashboard.
                  It knows about Redux and has props and actions
                  connected to it! You can find it in /redux/containers/dashboard.js.
                </div>
                <div id='tt2'>
                  <div className='App-logo'>
                    <img src={logo} className='App-logo' alt='logo' />
                  </div>
                  <h6>Welcome to Redux + React + Rails boilerplate</h6>
                  <div className='subtitle'><span className='highlight'>React</span> provided via create-react-app package <i className='fa fa-heart highlight fa-1x' aria-hidden='true' /></div>
                </div>
              </div>
              <div className='row'>
                {this.props.token
                  ? <div>
                    <button onClick={this.handleLogout.bind(this)} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>Logout</button>
                    <FavoriteForm />
                  </div>
                  : <VisibleLoginForm />
                }
              </div>
              <br />
              <div className='row'>
                <SearchForm
                  valueChangeCB={this.handleValueChange.bind(this)}
                  searchCB={this.handleSearch.bind(this)} />
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
            <div className='col-md-4'>
              <VisibleReduxTree />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
