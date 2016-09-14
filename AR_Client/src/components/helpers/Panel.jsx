//Panel.jsx

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const {children,title} = this.props;
		return(
			<div className='panel panel-primary'>
				<div className='panel-heading'>
					<h3 className='panel-title'>{title}</h3>
				</div>
				<div className='panel-body'>
					{children}

					<button className='btn btn-default'>Сохранить</button>
				</div>

			</div>

		)
}})
