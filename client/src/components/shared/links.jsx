import React, { Component } from 'react'
import Button from 'react-mdl/lib/Button'

class Links extends Component {
  render () {
    return (
      <div className='links'>
        <Button onClick={() => this.props.history.push('/')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
          Dashboard
        </Button>
        <Button onClick={() => this.props.history.push('/about')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
          About
        </Button>
        <Button onClick={() => this.props.history.push('/addfav')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
          AddFav
        </Button>
        {this.props.token
        ? <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent navlink'>
            Logout
        </Button>
        : null}
      </div>
    )
  }
}

export default Links
