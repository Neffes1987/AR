//itemGroup.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const iValue=this.props.iValue!=undefined?this.props.iValue:'';
		const label=this.props.label!=undefined?this.props.label:'';
		const func=this.props.func!=undefined?this.props.func:'';
		const type=this.props.type?this.props.type:'text';
		const disabled=this.props.disabled?this.props.disabled:false;
		const placeholder=this.props.placeholder?this.props.placeholder:'Начните ввод здесь....';
		const button = this.props.button?this.props.button:false
		const buttonClick = this.props.buttonClick?this.props.buttonClick:false
		return(
				<div className='input-group'>
					<span className='input-group-addon'>{label}</span>
					<input type={type} className='form-control' disabled={disabled} placeholder={placeholder} value={iValue} onChange={(e)=>{func(e.target.value)}}/>
					{button?<div className='input-group-btn'>
						<input type='button' value={button} onClick={()=>{buttonClick()}} />
						</div>:false}
				</div>
		)
	}
})
