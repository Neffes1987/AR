import React from 'react'
import { Component , View, Text, Button} from 'react-native';
import { Actions,DefaultRenderer } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import Menu from './Menu'
import Styles from '../Style.js'
export default React.createClass(
    {
        render(){
            const state = this.props.navigationState;
            const children = state.children;
            const length = children.length
            const header = Styles.header;
            const header_inner = Styles.header_inner;
            const btn = Styles.btn;
            return (
                <Drawer
                    ref="navigation"
                    open={state.open}
                    onOpen={()=>Actions.refresh({key:state.key, open: true})}
                    onClose={()=>Actions.refresh({key:state.key, open: false})}
                    type="displace"
                    content={<Menu />}
                    tapToClose={true}
                    openDrawerOffset={0}
                    panCloseMask={0.2}
                    negotiatePan={true}
                    tweenHandler={(ratio) => ({
                    main: { opacity:Math.max(0.54,1-ratio) }
                    })}>
                        <View style={header_inner}>
                            <Text style={header}>{children[length-1].title}</Text>
                        </View>
                        <DefaultRenderer navigationState={children[length-1]} onNavigate={this.props.onNavigate} style={{flex:10}} />
                        <Button
                            title='Меню'
                            style={{position:'fixed',bottom:0}}
                            color={btn}
                            onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value })}}/>
                </Drawer>
            );
        }
    }
)
