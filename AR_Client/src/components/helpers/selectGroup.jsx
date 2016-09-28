//selectGroup.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Select from '../helpers/select'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const search=this.props.search?this.props.search:false;
		const clear=this.props.clear?this.props.clear:false;
		const value=this.props.value?this.props.value:'';
		const list=this.props.list?this.props.list:[];
		const multi_v=this.props.multi_v?this.props.multi_v:false;
		const func=this.props.func?this.props.func:false;
		const label=this.props.label?this.props.label:false;
		const style=this.props.style?this.props.style:{};
		const placeholder=this.props.placeholder?this.props.placeholder:'';

		return(
			<div className='input-group' style={style}>
				<span className='input-group-addon'>{label}</span>
				<Select
					search={search}
					clear={clear}
					SelectClass='inputGroupAddon'
					value={value}
					optionsMap={list}
					placeholder={placeholder}
					onChangeSelect={func}
					multi_v={multi_v}
				/>
			</div>
		)
	}
})
