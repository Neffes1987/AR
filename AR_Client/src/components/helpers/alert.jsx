//alert.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from './Panel'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const alert = this.props.alert?this.props.alert:{};
		const title = alert.title?alert.title:'';
		const type = alert.type?alert.type:'primary';
		const message = alert.message?alert.message:'';
		const show = alert.show?alert.show:'0';
		const AlertChange = this.props.AlertChange;
		return(
			<div>
				{show!='0'?
				<div className='alert'>
					<Panel title={title} bsClass={type}>
						<button className='close button' onClick={AlertChange.bind(null,['data'],{show:'0'})}>x</button>
						<p>{message}</p>
					</Panel>
				</div>:<div></div>}
			</div>
		)
}})
