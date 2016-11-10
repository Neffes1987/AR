//Events.jsx
import {Map,List} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({
	eventsList:Map({
		1:Map({id:'1',name:'Врата 1',description:'fsdgadf',status:'1',actionsList:List([1,2])}),
		2:Map({id:'2',name:'Врата 2',description:'fsdgadf',status:'0',actionsList:List([1,2])}),
		3:Map({id:'3',name:'Врата 3',description:'fsdgadf',status:'2',actionsList:List([1,2])}),
		4:Map({id:'4',name:'Врата 4',description:'fsdgadf',status:'1',actionsList:List([1,2])}),
		5:Map({id:'5',name:'Врата 5',description:'fsdgadf',status:'1',actionsList:List([1,2])}),
		6:Map({id:'6',name:'Врата 6',description:'fsdgadf',status:'0',actionsList:List([1,2])}),
		7:Map({id:'7',name:'Врата 7',description:'fsdgadf',status:'1',actionsList:List([1,2])}),
	}),
	newEvent:0,
	filterValue:'',
	eventTemplate:Map({id:'new',name:'1',description:'',status:'1',actionsList:List([])})
})




function events(state = initialState, action) {
    switch (action.type) {
		case 'EVENTS_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'EVENTS_ARRAY_CHANGE':
			//let count = state.getIn(['modelsList']).size;
			//let value = insertInMap(action.value,['id'],'new_'+count);
		return insertInList(state,action.path,action.act,action.value);
		case 'EVENTS_GROUP_CHANGE':
			return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default events;
