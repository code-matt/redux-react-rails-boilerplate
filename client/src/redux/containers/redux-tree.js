import { connect } from 'react-redux'
import ReduxTreeView from '../../components/redux-tree/redux-tree'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData,
    token: state.token,
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleReduxTree = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTreeView)

export default VisibleReduxTree
