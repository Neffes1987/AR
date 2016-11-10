//chat.jsx
import {Map} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({});

function chat(state = initialState, action) {
     switch (action.type) {
		case 'CHAT_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'CHAT_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
		case 'CHAT_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default chat
