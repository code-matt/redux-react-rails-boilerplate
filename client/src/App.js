import React, { Component } from 'react'

// redux container components
import VisibleDashboard from './redux/containers/dashboard'
import VisibleAbout from './redux/containers/about'
import VisibleHeader from './redux/containers/header'
import VisibleReduxTree from './redux/containers/redux-tree'
import VisibleAddFavorite from './redux/containers/addfav'

// regular react components
import {NotFound} from './components/not-found/notfound'

// notifications
import Notifications from 'react-notify-toast'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReduxReactRails from './redux/reducers'

// router
import { Router, Route, browserHistory } from 'react-router'

import './scss/main.scss'

const store = createStore(ReduxReactRails, applyMiddleware(thunk))

class App extends Component {

  constructor () {
    super()
    this.railsRedirect = this.railsRedirect.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }

  requireAuth (nextState, replace) {
    if (!localStorage.token) {
      replace({
        pathname: '/',
        state: {
          nextPathname: nextState.location.pathname,
          authError: true }
      })
    }
  }

  railsRedirect (nextState, replace) {
    var location = window.location
    if (location.search.split('=')[0] === '?goto') {
      replace({
        pathname: '/' + location.search.split('=')[1],
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
        <div className='main-content-container'>
          <div className='left-content'>
            <VisibleHeader history={browserHistory} store={store} />
            <Provider store={store}>
              <Router history={browserHistory}>
                <Route path='/' component={VisibleDashboard} onEnter={composeEnters(this.railsRedirect)} />
                <Route path='/about' component={VisibleAbout} onEnter={composeEnters(this.railsRedirect)} />
                <Route path='/addfav' component={VisibleAddFavorite} onEnter={composeEnters(this.railsRedirect, this.requireAuth)} />
                <Route path='*' component={NotFound} onEnter={composeEnters(this.railsRedirect)} />
              </Router>
            </Provider>
          </div>
          <div className='right-content'>
            <VisibleReduxTree store={store} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

function composeEnters (...hooks) {
  return function onEnter (nextState, replace, executeTransition) {
    (function executeHooksSynchronously (remainingHooks) {
      if (!remainingHooks.length) return executeTransition()
      let nextHook = remainingHooks[0]
      if (nextHook.length >= 3) {
        nextHook.call(this, nextState, replace, () => {
          executeHooksSynchronously(remainingHooks.slice(1))
        })
      } else {
        nextHook.call(this, nextState, replace)
        executeHooksSynchronously(remainingHooks.slice(1))
      }
    })(hooks)
  }
}

