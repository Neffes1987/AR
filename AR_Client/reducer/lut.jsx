//lut.jsx
import {Map,fromJS} from 'immutable'
import {insertInMap,insertInList,changeMap,convertToObject} from './reducer_core'

let initialState = Map({
    lutList:Map({}),
    newItem:0
})

function lut(state = initialState, action) {
     switch (action.type) {
        case 'LUT_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
        case 'LUT_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
        case 'LUT_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        case 'LUT_INIT':
            const value = action.value?action.value:{};
            console.log('lutVal', value);
            return insertInMap(state, ['lutList'], fromJS(convertToObject(value)));
        default: return state
    }
}

export default lut
