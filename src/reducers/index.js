import { combineReducers } from "redux";
import counters from './Counter';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    counters,
    form: formReducer
});
