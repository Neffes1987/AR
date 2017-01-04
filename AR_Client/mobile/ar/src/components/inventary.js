import React from 'react'
import { Component , View, Text, Button,ScrollView,Modal} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InventItem from '../helpers/inventaryItem'
import Styles from '../Style.js'
const inventary = React.createClass({
    componentWillMount() {
        this.setState({modalVisible:false})
    },
    popupChangeState(){
        const state = this.state.modalVisible;
        this.setState({modalVisible:!state})
    },
    render () {
        const url = "http://s1.iconbird.com/ico/2013/9/446/w512h5121380376547MetroUIConfigureAlt.png"
        const Imgs = Styles.inventaryImg;
        const Descr = Styles.inventaryDescr;
        const ModalDescrHeader = Styles.ModalDescrHeader;
        //Descr['paddingBottom']=40;
        let arr=[]
        for(let i = 0; i<30; i++)
            arr.push(<InventItem url={url} key={i} selected={false} onItemClick={this.popupChangeState}/>)
        return (
            <View style={Imgs}>
                <ScrollView>
                    <View style={Imgs}>
                        {arr}
                    </View>
                </ScrollView>
                <View style={Descr}>
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                        <View style={{height:110}}>
                            <View style={Descr}>
                                <View >
                                    <InventItem url={url} size={110} selected={false} onItemClick={this.popupChangeState}/>
                                </View>
                                <View style={Descr}>
                                    <Text style={ModalDescrHeader}>Headerr Headerr Headerr Headerr Headerr Headerr</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{margin:10}}>sdgkljhsd fghadsfasdfgsdgsf sflkgsl;dfjglksdfj sfgskdjfglkjdsf
                                ;fkjglskjfdglkjs        rgkljwerlgkjsflkjg
                            </Text>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
})

export default inventary
