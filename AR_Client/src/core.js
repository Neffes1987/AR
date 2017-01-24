//core.js
import {push} from 'react-router-redux'
import {setDataForBlock, Remote_Autorization_Answer} from './action_creator'
export function initBlock(data, dispatch) {
    switch (data.block) {
        case 'autorization':
           dispatch(Remote_Autorization_Answer(data.value));
           dispatch(push('admin/'));
        break;
        case 'ERROR':alert(data.value);
        break;
    }
    if(data.block!='ERROR' && data.block!='autorization')
        for(let key in data.value) {
            dispatch(setDataForBlock(data.block[key], data.value[key]))
        }
}
