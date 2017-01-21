//DB.jsx
import {Map, fromJS} from 'immutable'
import {insertInMap, insertInList, changeMap,convertToObject} from './reducer_core'

let initialState = Map({DBList: Map({}), roles: Map({}), filterValue: '', editItem: '0'})

function DB(state = initialState, action) {
    let clone;
    switch (action.type) {
        case 'DB_INPUT_CHANGE':
            return insertInMap(state, action.path, action.value);
        case 'DB_ARRAY_CHANGE':
            return insertInList(state, action.path, action.act, action.value);
        case 'DB_GROUP_CHANGE':
            return changeMap(state, action.path, action.act, action.value);
        case 'DB_UPDATE':
            const DBList = action.value?action.value:{}
            clone = insertInMap(state, ['DBList'], fromJS(convertToObject(DBList)));
            return clone;
        case 'ROLE_UPDATE':
            const roles = action.value?action.value:{}
            clone = insertInMap(state, ['roles'], fromJS(roles));
            return clone;
        default:
            return state
    }
}

export default DB;
