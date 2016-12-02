import React, { Component } from 'react'
import './favorite-card.css'

class FavoriteCard extends Component {
  render () {
    return (
      <div>
        <li className='mdl-list__item'>
          <span className='resultbox mdl-list__item-primary-content'>
            <div className='img-fluid'>
              <img className='favicon' src={'http://icons.duckduckgo.com/ip2/' + this.props.favorite.url + '/.ico'} alt='icon' />
            </div>
            <i className='fa fa-link fx-1x' aria-hidden='true' />
            {this.props.favorite.name} - <a href={'http://' + this.props.favorite.url}>{this.props.favorite.url}</a>
          </span>
        </li>
      </div>
    )
  }
}

export default FavoriteCard
