import { connect } from 'react-redux'
import About from '../../components/about/about'

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
