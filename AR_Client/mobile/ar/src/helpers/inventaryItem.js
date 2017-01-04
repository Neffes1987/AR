import React from 'react'
import { Component, Image , View, Text, TouchableNativeFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
export default React.createClass({
    render () {
        const inner = Styles.inner;
        const url = this.props.url?this.props.url:''
        const selected = this.props.selected?true:false
        const size = this.props.size?this.props.size:50
        const onItemClick = this.props.onItemClick
        let styles={
            width:size,
            height:size,
            borderRadius:50,
        }
        if (selected){
            styles['borderColor']='red'
            styles['borderWidth']=2
        }
        return(
            <TouchableNativeFeedback onPress={()=>{onItemClick()}}>
                <Image source={{uri:url}} style={styles}/>
            </TouchableNativeFeedback>
        )
    }
})
