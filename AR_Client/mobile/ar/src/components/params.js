import React from 'react'
import { Component , View, Text, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
import ParamItem from '../helpers/paramItem'
const Home = React.createClass({
    render () {
        const inner = Styles.inner;
        return (
            <View style={inner}>
                <ParamItem name='Сила' param_value='10'               onItemClick={()=>{}} level={true}
                />
                <ParamItem name='Ловкость' param_value='10'               onItemClick={()=>{}} level={true}
                />
                <ParamItem name='Выносливость' param_value='10'               onItemClick={()=>{}} level={true}
                />
                <ParamItem name='Харизма' param_value='10'               onItemClick={()=>{}} level={true}
                />
                <ParamItem name='Интелект' param_value='10'               onItemClick={()=>{}} level={true}
                />
            </View>
        )
    }
})

export default Home
