import Scatter from '../../scatter-manager'

export default (
  state = {
    number: 0,
    text: 'foo',
    loggedIn: false
  },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      state.text += 'o'
      state.number += action.score
      return getObj(state)
    case 'DECREMENT':
      state.text += 'o'
      state.number += action.score
      return getObj(state)
    case 'CONNECT_SCATTER':
      Scatter.connect()
      return getObj(state)
    case 'GET_IDENTIFY':
      if (Scatter.getIdentity()) {
        state.loggedIn = true
      }
      return getObj(state)
    case 'TRANSFER':
      Scatter.transferEos(
        action.payload.to,
        action.payload.memo,
        action.payload.amount
      )
      return getObj(state)
    case 'FORGET_IDENTIFY':
      if (Scatter.forgetIdentity()) {
        state.loggedIn = false
      }
      return getObj(state)
    default:
      return state
  }
}

function getObj(state) {
  return {
    number: state.number,
    text: state.text,
    loggedIn: state.loggedIn
  }
}
