//BD.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {BDTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import { connect } from 'react-redux'
import DBTable from './subComponents/userTable'
import EditUser from './subComponents/editUser'

export const DB_view = React.createClass({
    mixins:[PureRenderMixin],
    render(){
        const editItem = this.props.editItem;
        return(
            <div className='BD'>
                <Panel title={BDTitle}>
                    {editItem=='0'?<DBTable {...this.props}/>:<EditUser {...this.props}/>}
                </Panel>
            </div>
        )
    }
})


const mapStateToProps = function(store) {
    return {
        DBList: store.db.getIn(['DBList']).toJS(),
        roles: store.db.getIn(['roles']).toJS(),
        charList: store.char.getIn(['charList']).toJS(),
        lutList: store.lut.getIn(['lutList']).toJS(),
        editItem: store.db.getIn(['editItem']),
    }
};


const DB_conteiner = connect(mapStateToProps, action_creator)(DB_view);

export default DB_conteiner
