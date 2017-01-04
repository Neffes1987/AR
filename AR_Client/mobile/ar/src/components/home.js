import React from 'react'
import { Component , View, Text, Button,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
const Home = React.createClass({
    render () {
        const homeInner = Styles.homeInner;
        const news = Styles.news;
        return (
            <ScrollView style={homeInner}>
                <Text style={news}>1. Взят штурмом сортир на гороховой.</Text>
                <Text style={news}>2. Потеряна столовая на Серверной.</Text>
            </ScrollView>
        )
    }
})

export default Home
