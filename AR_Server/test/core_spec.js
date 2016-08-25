import {List,Map} from 'immutable'
import {expect} from 'chai'

import {setEntries,next,vote} from '../server/core'

describe('App logic',
		()=>describe('Core.js',()=>{
			it('setEntries',()=>{
				const state=Map();
				const entries=['1','2','3'];
				const nextState = setEntries(state,entries);
				expect(state).to.equal(Map());
				expect(nextState).to.equal(Map({'entries':List.of('1','2','3')}));
			});
			it('next выбор двух претендентов',()=>{
				const state=Map({'entries':List.of('1','2','3','4')});
				const nextState= next(state);
				expect(nextState).to.equal(Map({
					vote:Map({pairs: List.of('1','2')})					,
					entries:List.of('3','4')}))
			});
			it('next помещение победителя в конец списка',()=>{
				const state=Map({
					vote:Map({
						pairs:List.of('1','2'),
						tally:Map({'1':1,'2':4})
					}),
					entries:List.of('3','4')
				});
				const nextState= next(state);
				expect(nextState).to.equal(Map({
					vote:Map({pairs: List.of('3','4')})					,
					entries:List.of('2')}))
			});
			it('next при ничьей = обоих в конец',()=>{
				const state=Map({
					vote:Map({
						pairs:List.of('1','2'),
						tally:Map({'1':4,'2':4})
					}),
					entries:List.of('3','4')
				});
				const nextState= next(state);
				expect(nextState).to.equal(Map({
					vote:Map({pairs: List.of('3','4')})					,
					entries:List.of('1','2')}))
			});
			it('next Победитель!',()=>{
				const state=Map({
					vote:Map({
						pairs:List.of('1','2'),
						tally:Map({'1':3,'2':4})
					}),
					entries:List()
				});
				const nextState= next(state);
				expect(nextState).to.equal(Map({'winner':'2'}))
			});

			it('vote новая структура',()=>{
				const state=Map({pairs:List.of('1','2')});
				const nextState=vote(state,'1');
				expect(nextState).to.equal(Map({
							pairs:List.of('1','2'),
							tally:Map({'1':1})
						}))
			});
			it('vote существующая структура',()=>{
				const state=Map({
							pairs:List.of('1','2'),
							tally:Map({'1':1,'2':4})
						});
				const nextState=vote(state,'1');
				expect(nextState).to.equal(Map({
					pairs:List.of('1','2'),
					tally:Map({'1':2,'2':4})
				}));
			});

		})
	);

