import React, { Component } from 'react'
import {Link} from 'react-router'
import Button from 'react-mdl/lib/Button'

import './links.css'

class Links extends Component {
  render () {
    return (
      <div>
        <Link to='/'>
          <Button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
            Dashboard
          </Button>
        </Link>
        <Link to='/about'>
          <Button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
            About
          </Button>
        </Link>
        <Link to='/addfav'>
          <Button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
            AddFav
          </Button>
        </Link>
        <div>
          <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
            Logout
          </Button>
        </div>
      </div>
    )
  }
}

export default Links
