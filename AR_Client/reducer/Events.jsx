//Events.jsx
import {Map,List,fromJS} from 'immutable'
import {insertInMap,insertInList,changeMap,convertToObject} from './reducer_core'

let initialState = Map({
    eventsList:Map({}),
    newEvent:0,
    filterValue:'',
    eventTemplate:Map({id:'new',name:'1',description:'',status:'1',actionsList:List([])})
})




function events(state = initialState, action) {
    switch (action.type) {
        case 'EVENTS_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
        case 'EVENTS_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
        case 'EVENTS_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        case 'EVENTS_INIT':
            const value = action.value?action.value:{};
            return insertInMap(state, ['eventsList'], fromJS(convertToObject(value)));
        default: return state
    }
}

export default events;
