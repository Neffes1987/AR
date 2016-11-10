//index.js
import MakeStore from './server/store'
import startServer from './server/ioServer'
import {db_init,db_insert,getRows} from './server/bd_core'
let UserDB = db_init('DB');
let LutDB = db_init('Lut');
let CharDB = db_init('Char');
let ActionDB = db_init('Action');
let EventDB = db_init('Event');
let PunishDB = db_init('Punish');
let Model3D_DB = db_init('model3D');

//function eachRow(key,value){
	//console.log(JSON.parse( value ))
//}


//const data = {user:'dddd',id:1};
//const key = db_insert(db,'users',data);
//getRows(db,'users',eachRow);


//export const store = MakeStore();
//store.dispatch({type:'SET_ENTRIES',	entries:require('./json/test.json')});
//store.dispatch({type:'NEXT'});

//startServer(store);
