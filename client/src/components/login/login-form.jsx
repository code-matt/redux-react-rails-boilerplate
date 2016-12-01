import React, { Component } from 'react'
import './login-form.css'

class LoginForm extends Component {
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
            <input className='mdl-textfield__input' type='text' id='sample3' />
            <label className='mdl-textfield__label' htmlFor='sample3'>Email</label>
          </div>
          <br />
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input className='mdl-textfield__input' type='text' id='sample3' />
            <label className='mdl-textfield__label' htmlFor='sample3'>Password</label>
          </div>
        </form>
        <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Login
        </button>
      </div>
    )
  }
}

export default LoginForm
