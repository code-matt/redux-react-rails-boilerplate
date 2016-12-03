import React, { Component } from 'react'
import './react-treeview.css'

class ReduxTreeView extends Component {
  constructor () {
    super()
    this.dataSource = {}
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    this.dataSource = Object.assign(
      {},
      {
        token: this.props.token
      },
      {
        appData: this.props.appData
      },
      {
        favorites: this.props.favorites
      }
    )
  }

  componentWillReceiveProps (props) {
    this.dataSource = Object.assign(
      {},
      {
        token: props.token
      },
      {
        appData: props.appData
      },
      {
        favorites: props.favorites
      }
    )
  }

  render () {
    return (
      <div className=''>
        <div className='treeview'>
          <h3 className='text-md-center highlight'>Redux State</h3>
          <div><pre>{JSON.stringify(this.dataSource, null, 2) }</pre></div>
        </div>
      </div>)
  }
}

export default ReduxTreeView
