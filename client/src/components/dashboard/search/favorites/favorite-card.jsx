import React, { Component } from 'react'

class FavoriteCard extends Component {
  render () {
    return (
      <div key={'favcard' + this.props.favorite.id}>
        <li className='resultbox'>
          <img className='favicon' src={'http://icons.duckduckgo.com/ip2/' + this.props.favorite.url + '/.ico'} target='_blank' alt='icon' />
          <i className='fa fa-link fx-1x' aria-hidden='true' />
          {this.props.favorite.name} - <a href={'http://' + this.props.favorite.url}>{this.props.favorite.url}</a>
        </li>
      </div>
    )
  }
}

export default FavoriteCard
