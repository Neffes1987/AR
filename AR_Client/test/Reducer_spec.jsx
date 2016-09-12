//Reducer_spec.jsx
import {List,Map, fromJS} from 'immutable'
import {expect} from 'chai'
import reducer from '../reducer/rootReduce'

describe('Reducer',()=>{
	it('Действие объединено с нынешним состоянием',()=>{
		const initialState=Map();
		const action = {
			type:'SET_STATE',
			state:{
				vote: {
					pairs:['1','2'],
					tally:{'1':20}
				}
			}
		}
		const nextState = reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
				vote:{
					pairs:['1','2'],
					tally:{'1':20}
				}
			}));
	});
	it('При переходе к следующей паре скидываем hasVoted',()=>{
		const initialState=fromJS({
				vote:{
					pairs:['1','2'],
					tally:{'1':20}
				},
				hasVoted:'1'
			});
		const action = {
			type:'SET_STATE',
			state:{
				vote: {
					pairs:['3','4']
				}
			}
		}
		const nextState = reducer(initialState,action);
		expect(nextState).to.equal(fromJS({vote:{pairs:['3','4']}}));
	});
	it('Добавляет флаг hasVoted в состояние',()=>{
		const initialState=fromJS({
			vote: {
					pairs:['1','2'],
					tally:{'1':20}
				}
		});
		let action = {type:'VOTE',entry:'1'}

		const nextState = reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
				vote:{
					pairs:['1','2'],
					tally:{'1':20}
				},
				hasVoted:'1'
			}));
	});
	it('Правильно обрабатывает выбор не из списка  голосования',()=>{
		const initialState=fromJS({
			vote: {
					pairs:['1','2'],
					tally:{'1':20}
				}
		});
		let action = {type:'VOTE',entry:'4'}

		const nextState = reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
				vote:{
					pairs:['1','2'],
					tally:{'1':20}
				}
			}));
	});
});

