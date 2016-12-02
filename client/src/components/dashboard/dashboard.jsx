import React, { Component } from 'react'
import './dashboard.css'
import FavoriteCard from '../favorites/favorite-card'
import VisibleLoginForm from '../../redux/containers/login'
import logo from './logo.svg'
import SearchForm from '../search/search-form'

class Dashboard extends Component {

  handleValueChange (value, fieldId, propName) {
    this.props._appActions.changeData(value, fieldId, propName)
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
            <VisibleLoginForm />
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
      </div>
    )
  }
}

export default Dashboard
