//index.js
import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {initBlock} from './core'
import createLogger from 'redux-logger'
import io from 'socket.io-client'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/app'
import reducer from '../reducer/rootReduce'
import {Main} from './components/main'
import Connections from './components/Connections'
import Main_settings from './components/Main_settings'
import Gallary from './components/Gallary'
import Actions from './components/Actions'
import Events from './components/Events'
import Lut from './components/Lut'
import Characters from './components/Characters'
import BD from './components/BD'
import Intro from './components/Intro'
import loginPage from './components/loginPage'

const middleware = routerMiddleware(browserHistory)
const logger = createLogger();
const socket =io.connect('http://localhost:8090');

const store = createStore(reducer,applyMiddleware(logger,middleware,remoteActionMiddleware(socket)));
//const store = createStore(reducer,applyMiddleware(logger));
socket.on('Remote_data',(data)=>{initBlock(data,store.dispatch)});
function checkLogin(store,nextState, replace) {
	const state = store.getState();
	const access = state.autorization.getIn(['data','access'])?state.autorization.getIn(['data','access']):'';
    console.log('access',access);
    if (access== '')replace('/');
}
const routes = <Route path='/' component={App}>
				<IndexRoute component={loginPage}/>
				<Route path='admin/' component={Main} onEnter={checkLogin.bind(null,store)}>
					<IndexRoute  component={Intro} />
					<Route path='Connection_settings/' component={Connections}/>
					<Route path='Main_settings/' component={Main_settings}/>
					<Route path='Gallary/' component={Gallary}/>
					<Route path='Actions/' component={Actions}/>
					<Route path='Events/' component={Events}/>
					<Route path='Lut/' component={Lut}/>
					<Route path='Characters/' component={Characters}/>
					<Route path='BD/' component={BD}/>
				</Route>
				<Route path='*' component={loginPage}/>
			</Route>

ReactDom.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>,document.getElementById('app'));
