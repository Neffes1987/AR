//actionTypes.jsx
import {Map} from 'immutable'
//import {insertInMap,insertInList} from './reducer_core'

let initialState = Map({
	list:Map({
		1:Map({
			id: '1',
			name:'Действие',
			subTypes:Map({
				1:Map({
					id: '1',
					name:'Атака',
				}),
				2:Map({
					id: '2',
					name:'Оборона',
				}),
				3:Map({
					id: '3',
					name:'Изучение',
				}),
				4:Map({
					id: '4',
					name:'Взаимодействие',
				}),

			}),
		}),
		2:Map({
			id: '2',
			name:'Поединок',
			subTypes:Map({}),
		}),
		3:Map({
			id: '3',
			name:'Интервал',
			subTypes:Map({}),
		}),
	}),
	newActions:1
})




function actionTypes(state = initialState, action) {
    switch (action.type) {
		//case 'INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		//case 'ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
        default: return state
    }
}

export default actionTypes
