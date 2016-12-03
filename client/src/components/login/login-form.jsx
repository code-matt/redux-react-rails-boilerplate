import React, { Component } from 'react'
import './login-form.css'
import Textfield from 'react-mdl/lib/Textfield'
import Button from 'react-mdl/lib/Button'

class LoginForm extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange (event) {
    this.props._appActions.changeData(event.target.value, event.target.id, 'login')
  }

  handleSubmit (event) {
    this.props._authActions.login(
      this.props.appData.login.usernameInput,
      this.props.appData.login.passwordInput
    )
    event.preventDefault()
  }
  render () {
    return (
      <div className='loginbox' id='tt1'>
        <div className='mdl-tooltip' data-mdl-for='tt1'>
          I am a login container. Therefore, I know about
          Redux and have props and actions connected to it!
          You can find me in redux/containers/login.js.
        </div>
        <strong>Login to add favs.</strong>
        <form action='#'>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <Textfield
              key={'usernameInput'}
              id='usernameInput'
              defaultValue='qq@qq.com'
              onChange={this.handleValueChange}
              label='Email'
            />
            <label className='mdl-textfield__label' htmlFor='usernameInput'>Email</label>
          </div>
          <br />
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <Textfield
              key={'passwordInput'}
              id='passwordInput'
              defaultValue='12345678'
              onChange={this.handleValueChange}
              label='Password'
            />
            <label className='mdl-textfield__label' htmlFor='passwordInput'>Password</label>
          </div>
        </form>
        <Button onClick={this.handleSubmit} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Login
        </Button>
      </div>
    )
  }
}

export default LoginForm
