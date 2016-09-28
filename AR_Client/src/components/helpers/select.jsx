//select.jsx
import React from 'react'
import Select from 'react-select'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import 'react-select/dist/react-select.css'


export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const {
			search,
			clear,
			SelectClass,
			value,
			optionsMap,
			onChangeSelect,
			title_lang,
			multi_v} = this.props;
		return(
			<Select
				name='form-field-name'
				value={value}
				multi={multi_v}
				joinValues={multi_v}
				delimite=','
				simpleValue={true}
				options = {optionsMap}
				searchable={search}
				clearable={clear}
				className={SelectClass}
				onChange={(val)=>{
					if (multi_v)val=val.split(',');
					if (val.length==1)val=val[0];
					onChangeSelect(val,title_lang);
					}}
			/>
		)
	}
})

