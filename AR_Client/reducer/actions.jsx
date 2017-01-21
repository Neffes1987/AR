//actions.jsx
import {Map, List,fromJS} from 'immutable'
import {insertInMap, insertInList, changeMap,convertToObject} from './reducer_core'

let initialState = Map({
    list: Map({}),
    newActions: 0,
    template: Map({
        id: 'new',
        name: '',
        gps: '',
        type: '',
        subType: '',
        modelId: '',
        success: Map({message: '', lut: List([])}),
        failure: Map({message: '', punish: List([])})
    })
})

function actions(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return insertInMap(state, action.path, action.value);
        case 'ARRAY_CHANGE':
            return insertInList(state, action.path, action.act, action.value);
        case 'ACTION_DELETE':
            return changeMap(state, action.path, action.act, action.value);
        case 'INIT_ACTION':
            const actions = action.value?action.value:{};
            return insertInMap(state, ['list'], fromJS(convertToObject(actions)));
        default:
            return state
    }
}

export default actions
