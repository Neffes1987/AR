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
}


export function insert(name,query,err,db){
    //name = имя коллекции
    //query = массив объектов для добавления
    if (err) {console.log(err);return false;}
    const collect = db.collection(name);
    collect.insertMany(query,{w:1},(err,r)=>{
        if(err || r.insertedCount ==query.length) db.close();
    })
}
export function update(selector,query,forOne,err,db){
    // selector = объект, с параметром по которому проихводится поиск в документе
    // query = данные для замены,объект
    // forOne = Обновить один документ(1) или все по селектору(0)
    if (err) {console.log(err);return false;}
    const collect = db.collection(name);
    if (forOne) collection.updateOne(selector, query);
    else collection.updateMany(selector, query, {w:1,multi:true}).then((r)=>{
        db.close();
    })
  }
