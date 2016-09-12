//ioServer.js
import Server from 'socket.io'

export default function startServer(store){
	const io = new Server().attach(8090);
	console.log('start');
	let state = store.getState().toJS();
	store.subscribe(()=>{
		console.log('Отдаю на клиент',store.getState().toJS());
		io.emit('state',store.getState().toJS())
	});//с сервака уходит полное состояние store - исправить!!!!!
	io.on('connection',(socket)=>{
		console.log('sendData:',state);
		socket.emit('state', state);
		socket.on('action', (state)=>{
			console.log('Принял от клиента = ',state);
			store.dispatch(state);
		});
	});
}
