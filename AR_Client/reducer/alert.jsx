//alert.jsx
import {Map,fromJS} from 'immutable'
import {insertInMap} from './reducer_core'

let initialState = Map({
	data:Map({
		show:'0',
		title:'',
		message:'',
		type:''
	})
})




function lut(state = initialState, action) {
     switch (action.type) {
		case 'ALERT_INPUT_CHANGE': return insertInMap(state,action.path,fromJS(action.value));
        default: return state
    }
}

export default lut
