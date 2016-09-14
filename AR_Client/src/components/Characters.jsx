//Characters.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {characterTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='Characters'>
				<Panel title={characterTitle}>

				</Panel>
			</div>
		)
	}
})
