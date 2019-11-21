import counterReducer from './counter';
import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default rootReducers;