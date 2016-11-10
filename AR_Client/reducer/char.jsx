//Char.jsx
import {Map} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({
	charList:Map({
		1:Map({id:'1',name:'Ловкость',description:'',value:4}),
		2:Map({id:'2',name:'Сила',description:'',value:4}),
		3:Map({id:'3',name:'Выносливость',description:'',value:4})
	}),
	classList:Map({
		1:Map({id:'1',name:'Убийца',description:'',charValue:Map({1:20,2:-1,3:-6})}),
		2:Map({id:'2',name:'Воин',description:'',charValue:Map({1:20,2:10,3:6})}),
	}),
	newClass:0,
	newChar:0,
	filterValue:'',
	classTemplate:Map({id:'new',name:'Имя класса',description:'',charValue:Map({})}),
	charTemplate:Map({id:'new',name:'',description:'',value:0}),
})

function Char(state = initialState, action) {
    switch (action.type) {
		case 'CHAR_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'CHAR_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
		case 'CHAR_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default Char;
