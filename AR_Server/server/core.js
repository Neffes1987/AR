import {List, Map} from 'immutable'

export const initialState=Map();
function getWinner(vote){
	if(!vote) return [];
	const [a,b] =vote.get('pairs');
	const aVote=vote.getIn(['tally',a],0);
	const bVote=vote.getIn(['tally',b],0);
	if (aVote>bVote) return [a];
	else if (aVote<bVote) return [b];
	else return [a,b];


}

export function setEntries(state,entries){
	return state.set('entries',List(entries))
}
export function next(state){
	let entries = state.get('entries').concat(getWinner(state.get('vote')));

	if (entries.size!==1)
		return state.merge(Map({
			vote:	Map({pairs:entries.take(2)}),
			entries:entries.skip(2),
		}))
	else return state.remove('vote').remove('entries').set('winner',entries.first())
}
export function vote(state,entry){return state.updateIn(['tally',entry],0,tally=>tally+1)}
