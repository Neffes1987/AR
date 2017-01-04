import { createStore, applyMiddleware, combineReducers } from 'redux';
//import thunk from 'redux-thunk';

import root from './reduces'

//const middleware = applyMiddleware(thunk);

export default (data = {}) => {
    const rootReducer = combineReducers({root})
    return createStore(rootReducer, data)
}
