//index.js
import MakeStore from './server/store'
import startServer from './server/ioServer'


export const store = MakeStore();
startServer(store);

store.dispatch({
	type:'SET_ENTRIES',
	entries:require('./json/test.json')
})
store.dispatch({type:'NEXT'});
