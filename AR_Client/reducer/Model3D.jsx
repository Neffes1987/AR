//Model3D.jsx
import {Map,List} from 'immutable'
import {insertInMap,insertInList} from './reducer_core'

let initialState = Map({
	modelsList:List([
		Map({img:'1.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'1'}),
		Map({img:'2.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'2'}),
		Map({img:'3.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'3'}),
		Map({img:'4.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'4'}),
		Map({img:'5.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'5'}),
		Map({img:'6.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'6'}),
		Map({img:'7.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'7'}),
		Map({img:'8.jpg',name:'Врата 1', point:1, open:0, description:'Действие 1',id:'8'})
	]),
	newModel:Map({img:'',name:'', point:1, open:1, description:'1',id:''}),
	filterValue:''
})




function models(state = initialState, action) {
    switch (action.type) {
		case 'GALL_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'GALL_ARRAY_CHANGE':
			let count = state.getIn(['modelsList']).size;
			let value = insertInMap(action.value,['id'],'new_'+count);
		return insertInList(state,action.path,action.act,value);
        default: return state
    }
}

export default models;
