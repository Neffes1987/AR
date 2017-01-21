//Lut.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {LutTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as action_creator from '../action_creator'
import Lut_table from './subComponents/lut_table'
import Lut_new from './subComponents/lut_new'


export const lut = React.createClass({
    mixins:[PureRenderMixin],
    render(){
        const newItem=this.props.newItem?this.props.newItem:0;
        return(
            <div className='Lut'>
                <Panel title={newItem?LutTitle.new_item:LutTitle.table}>
                    {newItem?<Lut_new {...this.props}/>:<Lut_table {...this.props}/>}
                </Panel>
            </div>
        )
    },
    componentWillMount() {
        this.props.getRemoteData('REMOTE_LUT');
    }
})

function mapStateToProps(state){
    return {
        lutList:state.lut.getIn(['lutList']).toJS(),
        charList:state.char.getIn(['charList']).toJS(),
        newItem:state.lut.getIn(['newItem']),
    }
}
export const Lut_conteiner = connect(mapStateToProps,action_creator)(lut);
export default Lut_conteiner
