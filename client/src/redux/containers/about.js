import { connect } from 'react-redux'
import About from '../../components/about/about'
import { changeData } from '../actions/app/changeData'
import { getFavorites } from '../actions/favorites/getFavorites'
import { logout } from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleAbout = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default VisibleAbout