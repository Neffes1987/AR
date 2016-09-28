//actions.jsx
import {Map,List} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({
	list:Map({
		1:Map({
			id: '1',
			name:'Стройка в биберево',
			gps:'Куда макар телят не гонял',
			type:'1',
			subType:'2',
			modelId:'2',
			success:Map({
				message:'Респект засранцу',
				lut:List([1,2,3]),
			}),
			failure:Map({
				message:'Ебать ты лох',
				punish:List([1,2,3]),
			})
		}),
		2:Map({
			id:'2',
			name:'бар "Голубая логуна"',
			gps:'в том самом месте',
			type:'1',
			subType:'1',
			modelId:'1',
			success:Map({
				message:'Добро пожаловать в коллектив',
				lut:List([1,2,3]),
			}),
			failure:Map({
				message:'Один раз не......',
				punish:List([1,2,3]),
			})
		})
	}),
	newActions:0,
	template:Map({
		id:'new',
		name:'',
		gps:'',
		type:'',
		subType:'',
		modelId:'',
		success:Map({
			message:'',
			lut:List([]),
		}),
		failure:Map({
			message:'',
			punish:List([]),
		})
	})
})



function actions(state = initialState, action) {
    switch (action.type) {
		case 'INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
		case 'ACTION_DELETE': return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default actions
