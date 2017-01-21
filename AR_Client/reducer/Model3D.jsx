//Model3D.jsx
import {Map,List,fromJS} from 'immutable'
import {insertInMap,insertInList} from './reducer_core'

let initialState = Map({
    modelsList:List([]),
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
        case 'GALLERY_INIT':
            const gal = action.value?action.value:[];
            return insertInList(state, ['modelsList'],'rewrite', fromJS(gal));
        default: return state
    }
}

export default models;
