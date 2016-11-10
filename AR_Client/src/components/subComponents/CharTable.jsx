//CharTable.jsx
import React from 'react'
import {fromJS} from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const charList = this.props.charList?this.props.charList:{};
		const charTemplate = this.props.charTemplate?this.props.charTemplate:{};
		const charInputChange = this.props.charInputChange?this.props.charInputChange:false;
		const charGChange = this.props.charGChange?this.props.charGChange:false;
		let key;
		let charMap=[];
		for (key in charList)
		{
			charMap.push(
				<tr key={key+':TR'}>
					<td>{key}</td>
					<td><input type='text' value={charList[key].name} onChange={(e)=>{charInputChange(['charList',key,'name'],e.target.value)}}/></td>
					<td><input type='number' value={charList[key].value} onChange={(e)=>{charInputChange(['charList',key,'value'],e.target.value)}}/></td>
					<td><textarea onChange={(e)=>{charInputChange(['charList',key,'description'],e.target.value)}}>{charList[key].description}</textarea></td>
					<td>
						<input type='button' value='Удалить' onClick={charGChange.bind(null,['charList'],'delete',key)}/>
					</td>
				</tr>);
		}
		return(
				<table className='table table-bordered table-hover text-center text-vertical'>
					<tbody>
						<tr>
							<td>#</td>
							<td>Название</td>
							<td>Базовое значение</td>
							<td>Описание</td>
							<td>Управление</td>
						</tr>
						{charMap}
						<tr>
							<td>New</td>
							<td><input type='text'  value={charTemplate.name} onChange={(e)=>{charInputChange(['charTemplate','name'],e.target.value)}}/></td>
							<td style={{width:'5%'}}><input type='number' value={charTemplate.value} onChange={(e)=>{charInputChange(['charTemplate','value'],e.target.value)}}/></td>
							<td><textarea onChange={(e)=>{charInputChange(['charTemplate','description'],e.target.value)}}>{charTemplate.description}</textarea></td>
							<td><input type='button' value='Добавить' onClick={()=>{charTemplate.name?charGChange(['charList'],'add',fromJS(charTemplate)):alert('Укажите имя характеристики')}}/></td>
						</tr>
					</tbody>
				</table>
		)
	}
})
