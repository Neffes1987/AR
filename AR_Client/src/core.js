//core.js
import {push} from 'react-router-redux'
import {setDataForBlock, Remote_Autorization_Answer} from './action_creator'
export function initBlock(data, dispatch) {
    let type='';
    switch (data.block) {
        case 'main_setting':type='MSETTING_INIT';break;
        case 'connection':type='CONNECTION_INIT';break;
        case 'intro':type='INTRO_INIT';break;
        case 'autorization':
           dispatch(Remote_Autorization_Answer(data.value));
           dispatch(push('admin/'));
        break;
        case 'ERROR':alert(data.value);
        break;
    }
    console.log('data.block',data.block);
    console.log('data.block',data.value);
    if(data.block!='ERROR' && data.block!='autorization')
        for(let key in data.value) {
            dispatch(setDataForBlock(data.block[key], data.value[key]))
        }
}
