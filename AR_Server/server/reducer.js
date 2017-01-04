//reducer.js
import {setEntries,next,vote,initialState} from './core'

export function reducer(state=initialState,action){
	switch(action.type){
		case 'SET_UP_STORE':return setEntries(state,action.store);
		case 'NEXT':return next(state);
		case 'VOTE':return state.update('vote',state=>vote(state,action.entry));
		default: return state;
	}

}
