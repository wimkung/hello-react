import { combineReducers } from 'redux'
import counters from './Counter'
import scatters from './Scatter'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  counters,
  scatters,
  form: formReducer
})
