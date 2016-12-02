import React, { Component } from 'react'
import TreeView from 'react-treeview'
import './react-treeview.css'

class ReduxTreeView extends Component {
  constructor () {
    super()
    this.dataSource = []
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.parseStateObject = this.parseStateObject.bind(this)
  }

  componentWillMount () {
    this.parseStateObject(this.props)
  }
  componentWillReceiveProps (props) {
    this.parseStateObject(props)
  }

  parseStateObject (props) {
    var arr = []
    for (let control in props.appData) {
      arr.push({
        type: control,
        collapsed: false,
        props: this.parseProps(props.appData[control])
      })
    }
    this.dataSource = arr
  }

  parseProps (props) {
    var arr = []
    for (let prop in props) {
      arr.push({
        [prop]: props[prop],
        type: prop,
        value: props[prop]
      })
    }
    return arr
  }

  render () {
    return (
      <div className='treeview'>
        {
          this.dataSource.map((control, i) => {
            const type = control.type
            const label = <span className='node'>{type}</span>
            return (

              <TreeView key={control.type + i} nodeLabel={label} defaultCollapsed={false}>
                {control.props.map((prop, k) => {
                  const label2 = <span className='node'>{prop.type}: {prop.value}</span>
                  return (
                    <TreeView nodeLabel={label2} key={'reduxtree' + k + i} defaultCollapsed={false} />
                  )
                })}
              </TreeView>
            )
          })
        }
      </div>)
  }
}

export default ReduxTreeView
