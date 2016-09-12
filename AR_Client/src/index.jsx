//index.js
import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import io from 'socket.io-client'


import {setState} from './action_creator'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/app'
import reducer from '../reducer/rootReduce'
import {Main} from './components/main'
import {Result_container} from './components/Results'

const logger = createLogger();


const socket =io.connect('http://localhost:8090');

const store = createStore(reducer,applyMiddleware(logger,remoteActionMiddleware(socket)));

socket.on('state',(state)=>{console.log('FROM_SERVER',state);store.dispatch(setState(state))});

const routes = <Route component={App}>
				<Route path='/results' component={Result_container}/>
				<Route path='/' component={Main}/>
			</Route>

ReactDom.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>,document.getElementById('app'));


