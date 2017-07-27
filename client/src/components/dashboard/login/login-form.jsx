import React, { Component } from 'react'
import Textfield from 'react-mdl/lib/Textfield'
import Button from 'react-mdl/lib/Button'
import Tooltip from 'react-mdl/lib/Tooltip'
import Spinner from 'react-mdl/lib/Spinner'

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

  isLoading () {
    if (this.props.appData.login.loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Button onClick={this.handleSubmit} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent loginbtn'>
          Login
        </Button>
      )
    }
  }
  render () {
    return (
      <div className='loginbox' id='tt1'>
        <strong>Login to add favs.</strong>
        <Tooltip position='left' label='I am a login container. Therefore, I know about Redux and have props and actions connected to it! You can find me in redux/containers/login.js.'>
          <form>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label field'>
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
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label field'>
              <Textfield
                type='password'
                key={'passwordInput'}
                id='passwordInput'
                defaultValue='12345678'
                onChange={this.handleValueChange}
                label='Password'
              />
              <label className='mdl-textfield__label' htmlFor='passwordInput'>Password</label>
            </div>
            <div className='submit'>
              {
                this.isLoading()
              }
            </div>
          </form>
        </Tooltip>
      </div>
    )
  }
}

export default LoginForm
