//Actions.jsx
import React from 'react'
import {actionTitle} from '../vars'
import Panel from './helpers/Panel'
import NewAction from './subComponents/newAction'
import ActionTable from './subComponents/actionTable'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import { connect } from 'react-redux'

export const actions = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const newActions =this.props.newActions?this.props.newActions:false
		return(
			<div className='Actions'>
				<Panel title={actionTitle}>
					{newActions?<NewAction {...this.props}/>:<ActionTable {...this.props}/>}
				</Panel>
			</div>
		)
	}
})

const mapStateToProps = function(store) {
    return {
		list:store.actions.getIn(['list']).toJS(),
		newActions:store.actions.getIn(['newActions']),
		template:store.actions.getIn(['template']),
		lutList:store.lut.getIn(['lutList']).toJS(),
		punishList:store.punish.getIn(['punishList']).toJS(),
		actionTypes:store.actionTypes.getIn(['list']).toJS(),
		gallary:store.model3D.getIn(['modelsList']).toJS(),
    }
};


const Action_conteiner = connect(mapStateToProps, action_creator)(actions);

export default Action_conteiner
