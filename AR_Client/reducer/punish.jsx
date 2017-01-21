//panish.jsx
import {Map,fromJS} from 'immutable'
import {insertInMap,convertToObject} from './reducer_core'

let initialState = Map({
    punishList:Map({})
})




function punish(state = initialState, action) {
    switch (action.type) {
        case 'INIT_PANISH':
            const value = action.value?action.value:{};
            console.log('actions',value);
            return insertInMap(state, ['punishList'], fromJS(convertToObject(value)));
        default: return state
    }
}

export default punish
