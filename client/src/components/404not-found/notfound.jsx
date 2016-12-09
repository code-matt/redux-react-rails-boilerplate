import React, { Component } from 'react'
import './about.css'
import Links from '../shared/links'

class NotFound extends Component {
  render () {
    return (
      <div>
        <Links />
        <h3 className='highlight'>Page not found :(></h3>
      </div>
    )
  }
}

export default NotFound