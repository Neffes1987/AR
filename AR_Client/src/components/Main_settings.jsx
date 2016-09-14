//main_settings.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {mainSettingTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='main_settings'>
				<Panel title={mainSettingTitle}>

				</Panel>
			</div>
		)
	}
})
