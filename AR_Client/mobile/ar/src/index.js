import React  from 'react'
import { Component , View, Text,Button} from 'react-native';
import { Provider } from 'react-redux';
import {Scene, Router,TabBar,Actions} from 'react-native-router-flux';
import createStore from './createStore'
const store = createStore()
import Home from './components/home'
import Inventary from './components/inventary'
import Inner from './components/Inner'
import Params from './components/params'
import Chat from './components/chat'
import Map from './components/map'
import Events from './components/events'
const Main = () => {
  return (
    <Provider store={store}>
        <Router>
            <Scene key="drawer" component={Inner} open={false}>
                <Scene key="Home" component={Home} title="Новости"  />
                <Scene key="Inventary" component={Inventary} title="Инвентарь" />
                <Scene key="Params" component={Params} title="Характеристики" />
                <Scene key="Chat" component={Chat} title="Чат"/>
                <Scene key="Map" component={Map} title="Карта" initial={true}/>
                <Scene key="Events" component={Events} title="События"/>
            </Scene>
        </Router>
    </Provider>
  )
}

export default Main
