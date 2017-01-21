export function FindCallback(res,blockInit){
    let value,block;
    switch(blockInit){
        case 'autorization':
            console.log('res',res['DBList'][0]._id);
            if(res['DBList']){
                value = res['DBList'][0]._id;
                block = 'autorization';
            }
            else{
                block = 'ERROR';
                value = 'Введены неверные данные';
            }
        break;
        case 'lut':
            value = res;
            block = {lutList:'LUT_INIT',charList:'UPDATE_CHAR'}
        break;
        case 'characters':
            value = res;
            block = {charList:'UPDATE_CHAR',classList:'UPDATE_CLASS'}
        break;
        case 'gallary':
            value = res;
            block = {modelsList:'GALLERY_INIT'}
        break;
        case 'panish':
            value = res;
            block = {punishList:'INIT_PANISH'}
        break;
        case 'actions':
            value = res;
            block = {
                actions:'INIT_ACTION',
                actionTypes:'INIT_ACTION_TYPES',
                modelsList:'GALLERY_INIT',
                charList:'UPDATE_CHAR',
                lutList:'LUT_INIT',
                punishList:'INIT_PANISH'
            }
        break;
        case 'events':
            value = res;
            block = {
                actions:'INIT_ACTION',
                eventsList:'EVENTS_INIT'
            }
        break;
        case 'db':
            value = res;
            block = {
                charList:'UPDATE_CHAR',
                classList:'UPDATE_CLASS',
                DBList:'DB_UPDATE',
                lutList:'LUT_INIT',
                roles:'ROLE_UPDATE'
            }
        break;
        default:
            value = res;
            block = blockInit;
            console.log(value);
    }
    return {block,value}
}
