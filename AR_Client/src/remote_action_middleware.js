//remote_action_middleware.js
export default socket=>store=>next => action =>{
    if (action.meta == 'remote'){
        socket.emit('action',action);
        console.log('Отправляю на сервер',action);
    }
    return next(action);
}
