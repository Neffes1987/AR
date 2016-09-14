//Actions.jsx
import React from 'react'
import {actionTitle} from '../vars'
import Panel from './helpers/Panel'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='Actions'>
				<Panel title={actionTitle}>

				</Panel>
			</div>
		)
	}
})
