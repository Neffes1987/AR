import {assert} from 'chai'
import {db_init,db_insert,getRows} from '../server/bd_core'
function eachRow(){}
function getlist(err,list){
	if(err)throw err;
	assert(list==={user:'1111'},'Где-то косяк!');
}

describe('Тестируем БД',()=>{
			it('Создаем домен в бд ТЕСТ',()=>{
				var db=db_init('test');
				const data={user:'dddd'};
				const key = db_insert(db,'users',data);
				const users = getRows(db,'users',eachRow, getlist);
			});
});


