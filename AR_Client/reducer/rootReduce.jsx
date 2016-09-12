//rootReduce.jsx
import {Map} from 'immutable'

const initialState=Map({
		entry:{},
		vote:Map({
			pairs:[],
			tally:Map()
			})
		});
function hasVotedReset(state){
	const pairs = state.getIn(['vote','pairs']);
	const hasVoted = state.get('hasVoted');
	console.log('hasVoted=',hasVoted, ' pairs=',pairs.toJS());
	if(hasVoted && !pairs.includes(hasVoted))
		return state.remove('hasVoted')
	else return state;
	}

function setState(state,newState){
	console.log('SET_STATE',newState);
	return hasVotedReset(state.merge(newState));
}

function vote(state,entry){
	const pairs = state.getIn(['vote','pairs']);
			if(pairs && pairs.includes(entry))
				return state.set('hasVoted',entry);
			else
				return state;
}




export default function(state=initialState,action){
	console.log('action',action);
	switch (action.type){
		case 'SET_STATE':
			return setState(state,action.state);
		case 'VOTE':
			return vote(state,action.entry);
		default:return state;

	}
}
