import React, { Component } from 'react'
import './header.css'
import logo from './logo.svg'
import Tooltip from 'react-mdl/lib/Tooltip'

class Header extends Component {
  render () {
    return (
      <div className='App App-header'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='row'>
              <Tooltip position='left' label='Everything you see is inside a container named Dashboard. It knows about Redux and has props and actions connected to it! You can find it in /redux/containers/dashboard.js.'>
                <div id='tt2'>
                  <div className='App-logo'>
                    <img src={logo} className='App-logo' alt='logo' />
                  </div>
                  <h6>Welcome to Redux + React + Rails boilerplate</h6>
                  <div className='subtitle'><span className='highlight'>React</span> provided via create-react-app package <i className='fa fa-heart highlight fa-1x' aria-hidden='true' /></div>
                  <div className='subtitle'>Make sure to fetch the <span className='highlight'><a href='https://github.com/code-matt/redux-react-rails-boilerplate/tree/clean_version' target='_blank'>clean version</a></span> if you are going to use it!</div>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header