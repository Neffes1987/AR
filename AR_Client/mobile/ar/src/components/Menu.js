import React,{PropTypes} from 'react'
import { Component , View, Text, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../Style.js'
const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};
function goToAct(param,drawer){
    drawer.close();
    switch (param) {
        case "Home":Actions.Home();break;
        case "Inventary":Actions.Inventary();break;
        case "Chat":Actions.Chat();break;
        case "Map":Actions.Map();break;
        case "Params":Actions.Params();break;
    }
}
export const Menu = (props, context)=>{
    const drawer = context.drawer;
    const btn = Styles.btn;
    const view = Styles.menuView;
    return(
        <View style={Styles.view}>
            <Button
                color={btn}
                onPress={()=>{goToAct("Home",drawer)}}
                title='Новости'/>
            <Button color={btn}
                onPress={()=>{goToAct("Inventary",drawer)}}
                title='Инвентарь'/>
            <Button color={btn}
                onPress={()=>{goToAct("Chat",drawer)}}
                title='Чат'/>
            <Button color={btn}
                onPress={()=>{goToAct("Map",drawer)}}
                title='Карта'/>
            <Button color={btn}
                onPress={()=>{goToAct("Params",drawer)}}
                title='Характеристики'/>
            <Button color={btn}
                onPress={()=>{goToAct("",drawer)}}
                title='Назад'
                />
        </View>
        )
}
Menu.contextTypes = contextTypes;
Menu.propTypes = propTypes;
export default Menu
