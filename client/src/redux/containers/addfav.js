import { connect } from 'react-redux'
import AddFavorite from '../../components/addfav/addfav'

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

const VisibleAddFavorite = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFavorite)

export default VisibleAddFavorite
