import React, { Component } from 'react'
import Links from '../shared/links'

class AddFavorite extends Component {
  render () {
    return (
      <div className='container'>
        <div className='App App-header'>
          <div className='row'>
            <div className='col-md-7'>
              <Links />
              <div className='loginbox'>
                This is an example of an authenticated route, you can come
                up with whatever kind of Guards you want on a route. Profile
                Complete.. Email verified.. etc..
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddFavorite
