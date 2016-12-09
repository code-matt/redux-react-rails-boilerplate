import React, { Component } from 'react'
import VisibleLinks from '../../redux/containers/links'

class NotFound extends Component {
  render () {
    return (
      <div>
        <VisibleLinks />
        <h3 className='highlight'>Page not found :(></h3>
      </div>
    )
  }
}

export default NotFound
