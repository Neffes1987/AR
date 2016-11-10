//autorization.jsx
import {Map} from 'immutable'
import {insertInMap} from './reducer_core'

let initialState = Map({
	data:Map({
		login:'',
		password:'',
		access:'',
		role:'',
		email:''
	}),
	restore:''
})
function singIn(state = initialState, action) {
     switch (action.type) {
		case 'SINGIN_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
        default: return state
    }
}
export default singIn
