import React, { Component } from 'react'
import VisibleDashboard from './redux/containers/dashboard'
import './App.css'

import Notifications from 'react-notify-toast'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReduxReactRails from './redux/reducers'

const store = createStore(ReduxReactRails,applyMiddleware(thunk))

class App extends Component {

  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }

  render () {
    return (
      <div>
        <div className='main'>
          <Notifications />
        </div>
        <Provider store={store}>
          <VisibleDashboard />
        </Provider>
      </div>
    )
  }
}

export default App


