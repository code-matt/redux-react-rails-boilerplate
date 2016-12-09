import React, { Component } from 'react'
import {Link} from 'react-router'
import Button from 'react-mdl/lib/Button'
import './about.css'
import VisibleLinks from '../../redux/containers/links'

class AboutPage extends Component {
  render () {
    return (
      <div className='container'>
        <div className='App App-header'>
          <div className='row'>
            <div className='col-md-7'>
              <VisibleLinks />
              <div className='loginbox'>
                This is an example of an unauthenticated route. Check out
                the router in client/src/App.jsx
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
