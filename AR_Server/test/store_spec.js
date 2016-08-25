//store_spec.js
import {fromJS,Map} from 'immutable'
import {expect} from 'chai'

import MakeStore from '../server/store'

describe('Store',()=>{
	it('Хранилище сконфигурировано с помощью правильного преобразования',()=>{
		const store = MakeStore();
		expect(store.getState()).to.equal(Map());

		store.dispatch({
			type:'SET_ENTRIES',
			entries:['1','2']});

		expect(store.getState()).to.equal(fromJS({entries:['1','2']}));
		});
	});

