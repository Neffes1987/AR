//reducer_spec.js
import {fromJS,Map} from 'immutable'
import {expect} from 'chai'

import {reducer} from '../server/reducer'

describe('reducer',()=>{
		it('Handles SET_ENTRIES',()=>{
			const initialState=Map();
			const action = {type:'SET_ENTRIES', entries:['1']}
			const nextState = reducer(initialState,action);
			expect(nextState).to.equal(fromJS({entries:['1']}));
		});
		it('Handles Next',()=>{
			const initialState=fromJS({entries:['1','2','3','4']});
			const action = {type:'NEXT'}
			const nextState = reducer(initialState,action);
			expect(nextState).to.equal(fromJS({vote:{pairs:['1','2']},entries:['3','4']}));
		});
		it('Handles Vote',()=>{
			const initialState=fromJS({
					vote:{
						pairs:['1','2']
					},
					entries:['3','4']
				})
			const action = {type:'VOTE',entry:'1'}
			const nextState = reducer(initialState,action);
			expect(nextState).to.equal(fromJS({vote:{pairs:['1','2'],tally:{'1':1}},entries:['3','4']}));
		});
		it('Набор акшинов',()=>{
			const actions=[
				{type:'SET_ENTRIES', entries:['1','2']},
				{type:'NEXT'},
				{type:'VOTE',entry:'1'},
				{type:'VOTE',entry:'1'},
				{type:'NEXT'}
			]
			const nextState = actions.reduce(reducer,Map());
			expect(nextState).to.equal(fromJS({winner:'1'}));
		});
})
