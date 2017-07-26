import React, { Component } from 'react'
import logo from './logo.svg'
import VisibleLinks from '../../redux/containers/links'

class Header extends Component {
  render () {
    return (
      <header>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Welcome to Redux + React + Rails boilerplate</h1>
        <VisibleLinks history={this.props.history} store={this.props.store} />
      </header>
    )
  }
}

export default Header
