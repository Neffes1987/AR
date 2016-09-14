//Events.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {eventTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='Events'>
				<Panel title={eventTitle}>

				</Panel>
			</div>
		)
	}
})
