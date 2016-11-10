//bd_core.js

import Db from 'simple-node-db';
import ifExists from 'file-exists';
import {createSimpleLogger} from 'simple-node-logger';
var log = createSimpleLogger('./server/db/logger.log');

function db_create(name){
	var options = {
		path:'./server/db/'+name,
		log:log,
		readAfterChange:true
		}
	var db = new Db(options);
	return db;
}

export function db_init(name){
	let db = db_create(name);
	db = restoreDB(db,name);
	return db;
}

export function backupDB(db,domain){
	db.backup('./server/db/'+domain+'.dat',(err,model)=>{if (err) throw err;});
}

export function db_insert(db,domain,data){
	function status(err,stat){
		data.id = stat['domains'][domain];
		var key = db.createDomainKey(domain,data.id);
		db.insert(key,data,(err,model)=>{if (err) throw err});
		backupDB(db,domain);
		return key;
	}
	db.stats(status);
}

export function db_update(db,data,domain){
	db.update(key,data,(err,model)=>{if (err) throw err});
	backupDB(db,domain);
}

export function getRows(db,domain,eachRow){
	var params={};
	function getlist(err,list){if(err)throw err}
	if (domain)params={start:domain+':',end:domain+':~'}
	db.query(params, eachRow, getlist);
}

export function restoreDB(db,domain){
	const path = './server/db/'+domain+'.dat';
	if (ifExists(path))
	db.restore(path,(err,rowRead)=>{if (err) throw err});
	return db;
}



