import React from 'react'
import { Component , View, Text, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
const Home = React.createClass({
    render () {
        const inner = Styles.inner;
        return (
            <View style={inner}>
                <Text >Чат</Text>
            </View>
        )
    }
})

export default Home
