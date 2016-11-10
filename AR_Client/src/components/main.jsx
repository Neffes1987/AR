//main.jsx
import React from 'react'
import Menu from './helpers/navigation'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Main = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		return(
			<div className='row-area'>
					<div className='left-side'><Menu {...this.props}/></div>
					<div className='right-side'>{this.props.children}</div>
				</div>
		)
	}
})
