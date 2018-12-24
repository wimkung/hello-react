import { connect } from 'react-redux'
import ScatterComponent from '../../components/scatter'
import { increment, decrement } from '../../../../actions/Counter'
import {
  connect as connectScatter,
  getIdentity,
  transfer,
  forgetIdentity,
  callContract
} from '../../../../actions/Scatter'

const mapStateToProps = state => {
  return { values: state.scatters }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => {
      dispatch(increment(value))
    },
    onDecrement: value => {
      dispatch(decrement(value))
    },
    onConnect: () => {
      dispatch(connectScatter())
    },
    onGetIdentify: () => {
      dispatch(getIdentity())
    },
    onTransfer: value => {
      dispatch(transfer(value))
    },
    onForgetIdentify: () => {
      dispatch(forgetIdentity())
    },
    onCallContract: () => {
      dispatch(callContract())
    }
  }
}

const ScatterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScatterComponent)

export default ScatterLink
