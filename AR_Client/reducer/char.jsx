//Char.jsx
import {Map,fromJS} from 'immutable'
import {insertInMap,insertInList,changeMap,convertToObject} from './reducer_core'

let initialState = Map({
    charList:Map({}),
    classList:Map({}),
    newClass:0,
    newChar:0,
    filterValue:'',
    classTemplate:Map({id:'new',name:'Имя класса',description:'',charValue:Map({})}),
    charTemplate:Map({id:'new',name:'',description:'',value:0}),
})

function Char(state = initialState, action) {
    let clone={};
    switch (action.type) {
        case 'CHAR_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
        case 'CHAR_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
        case 'CHAR_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        case 'UPDATE_CLASS':
            const classList = action.value?action.value:{};
            clone = insertInMap(state,['classList'],fromJS(convertToObject(classList)));
        return clone;
        case 'UPDATE_CHAR':
            const charList = action.value?action.value:{};
            clone = insertInMap(state,['charList'],fromJS(convertToObject(charList)));
        return clone;
        default: return state
    }
}

export default Char;
