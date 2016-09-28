//tableBody.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {eventTitle} from '../vars'
import SelectGroup from './helpers/selectGroup'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const header =
		return(
			<div className='Events'>
				<Panel title={eventTitle}>

					<SelectGroup label='Действие' value={''}/><br/>
				</Panel>
			</div>
		)
	}
})
