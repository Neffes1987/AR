import client from 'mongodb'
export class dbc{
    constructor (callback,url,dbName) {
        this.callback = callback;
        this.url=url;
        this.dbName=dbName;
        this.dbHandle=null;
        this.params = {};
        this.block = '';
        this.block = '';
        this.findOpt = {
            colNames:[],
            query:[],
            options:{
                type:'',
                fields:[],
                value:[]
            }
        }
    }
    connect () {
        const _this = this;
        console.log(this.url);
        console.log(this.dbName);
        client.MongoClient.connect(this.url,function(err,db){
            if(err){console.log(err);return false;}
            var pdb = db.db(_this.dbName);
            _this.dbHandle = pdb;
            _this.callback(_this);
            console.log('Базу подключил');
        })
    }
    find () {
        const _this = this;
        const params = this.findOpt;
        if ( !params.colNames ) return false;
        let result = {}, len = params.colNames.length-1;
        function setRes(colName,step,err,res){
            if (err){
                result['error']=1;
                _this.callback(result,_this.block);
                console.log(error);
                return false;
            }
            result[colName]=res;
            console.log(colName,res);
            if (len==step) _this.callback(result,_this.block);
        }
        for(let key in params.colNames){
            const query = params.query[key]?params.query[key]:{}
            const colName = params.colNames[key];
            const collect = _this.dbHandle.collection(colName);//dbHandle - указатель на открытую бд
            switch(params.options){
                case 'skip':
                    collect.find(query,params.options.fields[key]).skip(params.value[0]).toArray(
                        setRes.bind(null,colName,key));
                break;
                case 'limit':
                    collect.find(query,params.options.fields[key]).limit(params.value[0]).toArray(
                        setRes.bind(null,colName,key));
                break;
                case 'both':
                    collect.find(query,params.options.fields[key]).limit(params.value[0]).skip(params.value[1]).toArray(setRes.bind(null,colName,key));
                break;
                default:
                    collect.find(query,params.options.fields[key]).toArray(setRes.bind(null,colName,key));
            }

        }
    }
    insert(data,colName,options){
        const _this = this;
        const collection = _this.dbHandle.collection(colName);
        const callback = _this.callback;
        collection.insertMany(data,options,function(err, r) {
            if (err){
                console.log(err);
                callback(err);
            }
            if(r.insertedCount == data.length) callback('success');
        })
    }
    update (source,colName,data,param){
        //param =
            //$set - добавление поля в документ
            //$push - добавления элемента в массив
            //$inc - инкремент(>0),декремент(<0) параметра
            //Если параметр пустой то перезапись всего поля
        const _this = this;
        let replacement = {}
        if(param) replacement = {[param]:data}
        else replacement = data
        const collection = _this.dbHandle.collection(colName);
        const callback = _this.callback;
        collection.updateOne(source,replacement,{upsert:true,w:1},function(err, r) {
            if (err){
                console.log(err);
                callback(err)
            }
            else callback('success')
        })
    }
}
