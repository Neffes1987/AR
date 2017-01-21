//index.js
import startServer from './server/ioServer'
import {dbc} from './server/bd_core'


const dbName='local';
const url = 'mongodb://root:1111@localhost:27017/admin';
const callback = (db)=>{startServer(db,8090)}
let DBClass = new dbc(callback,url,dbName)
DBClass.connect();
