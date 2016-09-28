//rootReduce.jsx
//import {Map} from 'immutable'
import { combineReducers } from 'redux'
import actions from './actions'
import lut from './lut'
import punish from './punish'
import actionTypes from './actionTypes'
import model3D from './Model3D'
import events from './Events'


const rootReducer = combineReducers({
	actions,
	lut,
	punish,
	actionTypes,
	model3D,
	events
});

export default rootReducer
