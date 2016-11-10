//lut.jsx
import {Map} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({
	lutList:Map({
		1:Map({
			label:'Граната',
			id:'1',
			charList:Map({1:20,2:3,3:10}),
			img:'/images/1.jpg'
		}),
		2:Map({
			label:'Граната осколочная',
			id:'2',
			charList:Map({1:20,2:3,3:10}),
			img:'/images/2.jpg'
		}),
		3:Map({
			label:'Гранатамет',
			id:'3',
			charList:Map({1:20,2:3,3:10}),
			img:'/images/3.jpg'
		}),
		4:Map({
			label:'Меч',
			id:'4',
			charList:Map({1:20,2:3,3:10}),
			img:'/images/4.jpg'
		}),
		new:Map({
			label:'Имя',
			id:'New',
			charList:Map({}),
			img:''
		}),
	}),
	newItem:0
})




function lut(state = initialState, action) {
     switch (action.type) {
		case 'LUT_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'LUT_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
		case 'LUT_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default lut
