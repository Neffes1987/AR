import {expect} from 'chai'
import {List,Map} from 'immutable'

describe('Immutability',()=>describe('a tree',()=>{

	function addMovie(movies,movie){return movies.set('movies',movies.get('movies').push(movie))}

	it('is immutable',()=>{
		let state=Map({'movies':List.of('1','2')});
		let nextState=addMovie(state,'3');

		expect(nextState).to.equal(Map({'movies':List.of('1','2','3')}));
		expect(state).to.equal(Map({'movies':List.of('1','2')}));
	});
}))
