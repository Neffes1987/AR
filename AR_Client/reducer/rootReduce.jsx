//rootReduce.jsx
//import {Map} from 'immutable'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import actions from './actions'
import lut from './lut'
import punish from './punish'
import actionTypes from './actionTypes'
import model3D from './Model3D'
import events from './Events'
import char from './char'
import db from './DB'
import alert from './alert'
import autorization from './autorization'


const rootReducer = combineReducers({
    actions,
    lut,
    punish,
    actionTypes,
    model3D,
    events,
    char,
    db,
    alert,
    autorization,
    routerReducer
});

export default rootReducer
