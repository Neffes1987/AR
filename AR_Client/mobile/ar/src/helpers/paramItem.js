import React from 'react'
import { Component, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
export default React.createClass({
    render () {
        //const inner = Styles.inventaryDescr;
        const btn = Styles.btn;
        const name = this.props.name?this.props.name:''
        const param_value = this.props.param_value?this.props.param_value:''
        const level = this.props.level?this.props.level:0
        const onItemClick = this.props.onItemClick
        const localStyles={
            inner:{
                backgroundColor:'white',
                flex:1,
                flexDirection: 'row',
                flexWrap:'wrap',
                justifyContent: 'space-between',
            },
            view:{
                fontSize:26,
                margin:10,
            },
            button:{
                backgroundColor:btn,
                height:30,
                width:30,
                margin:14
            },
            button_text:{
                textAlign:'center',
                fontSize:21
            }
        }
        return(
            <View style={localStyles.inner}>
                <View style={{width:200}}>
                    <Text style={localStyles.view}>{name}</Text>
                </View>
                <View style={localStyles.inner1}>
                    <Text style={localStyles.view}>{param_value}</Text>
                </View>
                {level?
                    <View>
                        <TouchableOpacity style={localStyles.button} onPress={()=>{onItemClick()}}>
                            <Text style={localStyles.button_text}>+</Text>
                        </TouchableOpacity >
                    </View>:<Text></Text>}
            </View>
        )
    }
})
