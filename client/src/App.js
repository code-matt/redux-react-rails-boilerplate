import React, { Component } from 'react'
import VisibleDashboard from './redux/containers/dashboard'
import VisibleHeader from './redux/containers/header'
import VisibleReduxTree from './redux/containers/redux-tree'
import './App.css'

import Notifications from 'react-notify-toast'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReduxReactRails from './redux/reducers'

// router
import { Router, Route, browserHistory } from 'react-router'

const store = createStore(ReduxReactRails, applyMiddleware(thunk))

class App extends Component {

  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }

  requireAuth (nextState, replace) {
    if (!localStorage.token) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render () {
    return (
      <div>
        <div className='main'>
          <Notifications />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div>
                <VisibleHeader store={store} />
              </div>
              <Provider store={store}>
                <Router history={browserHistory}>
                  <Route path='/' component={VisibleDashboard} />
                  <Route path='*' component={VisibleDashboard} />
                </Router>
              </Provider>
            </div>  
            <div className='col-md-4'>
              <VisibleReduxTree store={store} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

