//actionTypes.jsx
import {Map,fromJS} from 'immutable'
import {insertInMap,convertToObject} from './reducer_core'

let initialState = Map({
    list:Map({}),
    newActions:1
})

function actionTypes(state = initialState, action) {
    switch (action.type) {
        case 'INIT_ACTION_TYPES':
            const value = action.value?action.value:{};
        return insertInMap(state, ['list'], fromJS(convertToObject(value)));
        default: return state
    }
}

export default actionTypes
