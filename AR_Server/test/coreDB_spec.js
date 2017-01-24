import {assert} from 'chai'
import {dbc} from '../server/bd_core'
describe('Тестируем БД',()=>{
    it('Обновляем данные в бд',()=>{
        const dbName='local';
        const url = 'mongodb://root:1111@localhost:27017/admin';
        const callback = (db)=>{
            db.callback = (err)=>{
                assert(err != 'success', err)
            }
            db.update({id:1},'lutList',{id:54},'$set')
        };
        let DBClass = new dbc(callback,url,dbName)
        DBClass.connect();
    });
})
