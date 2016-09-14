//index.js
import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import io from 'socket.io-client'


import {setState} from './action_creator'
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
import Log from './components/Log'
import Chat from './components/Chat'
import Intro from './components/Intro'
import Wrapper from './components/Wrapper'

const logger = createLogger();


const socket =io.connect('http://localhost:8090');

const store = createStore(reducer,applyMiddleware(logger,remoteActionMiddleware(socket)));

socket.on('state',(state)=>{console.log('FROM_SERVER',state);store.dispatch(setState(state))});

const routes = <Route component={App}>
				<Route path='/' component={Wrapper}>
					<Route path='admin' component={Main}>
						<IndexRoute  component={Intro} />
						<Route path='Connection_settings' component={Connections}/>
						<Route path='Main_settings' component={Main_settings}/>
						<Route path='Gallary' component={Gallary}/>
						<Route path='Actions' component={Actions}/>
						<Route path='Events' component={Events}/>
						<Route path='Lut' component={Lut}/>
						<Route path='Characters' component={Characters}/>
						<Route path='BD' component={BD}/>
						<Route path='Chat' component={Chat}/>
						<Route path='Log' component={Log}/>
					</Route>
				</Route>
			</Route>

ReactDom.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>,document.getElementById('app'));


