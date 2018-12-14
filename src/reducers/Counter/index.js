export default (
  state = {
    number: 0,
    text: 'foo'
  },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      state.text += 'o'
      state.number += action.score
      return {
        number: state.number,
        text: state.text
      }
    case 'DECREMENT':
      state.text += 'o'
      state.number += action.score
      return {
        number: state.number,
        text: state.text
      }
    default:
      return state
  }
}
