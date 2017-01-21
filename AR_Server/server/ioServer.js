//ioServer.js
import Server from 'socket.io'
import {FindCallback} from './core'
import {find} from './bd_core'

export default function startServer(db,port){
    const io = new Server().attach(port);
    console.log('start server');
    io.on('connection',(socket)=>{
        socket.on('action', (action)=>{
            let value,block,data;
            console.log(action.type);
            switch(action.type){
                case 'REMOTE_AUTORIZATION': //FIXME
                    db.block = 'autorization';
                    db.findOpt = {
                        colNames:['DBList'],
                        query:{
                            login:action.name,
                            password:action.pass,
                            role:"1"
                        },
                        options:{fields:[{_id:1}]}
                    }
                break;
                case 'REMOTE_CHARS': //fixed
                    db.block = 'characters';
                    db.findOpt = {
                        colNames:['classList','charList'],
                        query:{},
                        options:{fields:[{_id:0},{_id:0}]}
                    }
                break;
                case 'REMOTE_BD'://fixed
                    db.block = 'db';
                    db.findOpt = {
                        colNames:[
                            'DBList',
                            'roles',
                        ],
                        query:[],
                        options:{
                            fields:[
                                {_id:0,fname:1,lname:1,contacts:1,role:1,id:1},
                                {_id:0}
                            ]
                        }
                    }
                break;
                case 'REMOTE_BD_USER'://fixed
                    db.block = 'db';
                    db.findOpt = {
                    colNames:[
                        'DBList',
                        'charList',
                        'roles',
                        'lutList',
                        'classList'
                    ],
                    query:[{id:action.id}],
                    options:{
                        fields:[
                            {_id:0},
                            {_id:0},
                            {_id:0},
                            {_id:0},
                            {_id:0}]
                        }
                    }
                break;
                case 'REMOTE_ACTIONS': //fixed
                    db.block = 'actions';
                    db.findOpt = {
                        colNames:['actions'],
                        query:[],
                        options:{
                            fields:[{_id:0,id:1,name:1,gps:1}]
                        }
                    }
                break;
                case 'REMOTE_ACTIONS_ITEM': //fixed
                    db.block = 'actions';
                    db.findOpt = {
                        colNames:[
                            'actions',
                            'lutList',
                            'punishList',
                            'modelsList',
                            'actionTypes'
                        ],
                        query:[{id:action.id}],
                        options:{
                            fields:[
                                {_id:0},
                                {_id:0,id:1,label:1},
                                {_id:0,id:1,label:1},
                                {_id:0,id:1,name:1},
                                {_id:0},
                            ]
                        }
                    }
                break;
                case 'REMOTE_EVENTS_ITEM'://fixed
                    db.block = 'events';
                    db.findOpt = {
                        colNames:[
                            'actions',
                            'eventsList'
                        ],
                        query:[{},{id:action.id}],
                        options:{
                            fields:[
                                {_id:0,id:1,name:1,gps:1},
                                {_id:0},
                            ]
                        }
                    }
                break;
                case 'REMOTE_EVENTS'://fixed
                    db.block = 'events';
                    db.findOpt = {
                        colNames:[
                            'eventsList'
                        ],
                        query:[],
                        options:{
                            fields:[
                                {_id:0},
                            ]
                        }
                    }
                break;
                case 'REMOTE_LUT'://fixed
                    db.block = 'lut';
                    db.findOpt = {
                        colNames:['lutList','charList'],
                        query:{},
                        options:{fields:[{_id:0},{id:1,name:1,_id:0}]}
                    }
                break;
                case 'REMOTE_GALLARY':
                    db.block = 'gallary';
                    db.findOpt = {
                        colNames:['modelsList'],
                        query:{},
                        options:{fields:[{_id:0}]}
                    }
                break;
                case 'REMOTE_CONNECTIONS':
                    //value = state.modelsList;
                    block = 'connection';
                break;
                case 'REMOTE_MAIN_SETTING':
                    //value = state.modelsList;//FIXME
                    block = 'main_setting';
                break;
            }
            db.callback = (res,block)=>{socket.emit('Remote_data', FindCallback(res,block))}
            db.find();
            //console.log('Принял от клиента = ',action);
        });
    });
}
