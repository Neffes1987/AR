//Lut_table.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const lutList=this.props.lutList?this.props.lutList:{};
		const lutInputChange=this.props.lutInputChange?this.props.lutInputChange:false;
		const lutGChange=this.props.lutGChange?this.props.lutGChange:false;
		const charList=this.props.charList?this.props.charList:{};
		let key;
		let skey;
		let lutArr=[];
		for(key in lutList){
			if (key=='new') continue;
			let charArr=[];
			for(skey in lutList[key].charList){
				if (charList[skey]){
					charArr.push(
						<p  key={'row_char'+skey}>
							<span>{charList[skey].name+':'} </span> <span>{lutList[key].charList[skey]}</span>
						</p>
					);
				}
			}
			lutArr.push(
				<tr key={'row'+key}>
					<td>{lutList[key].label}</td>
					<td><img className='icon_class' src={lutList[key].img}/></td>
					<td>{charArr}</td>
					<td>
						<input type='button' value='Редактировать' onClick={lutInputChange.bind(null,['newItem'],key)}/>{' '}
						<input type='button' value='Удалить' onClick={lutGChange.bind(null,['lutList'],'delete',key)}/>
					</td>
				</tr>
			);
		}
		return(
			<div className='Lut_table'>
					<table>
						<tbody>
							<tr>
								<td>Имя</td>
								<td>Изображение</td>
								<td>Характеристики</td>
								<td>Управление</td>
							</tr>
							{lutArr}
						</tbody>
					</table>
					<input type='button' value='Добавить' onClick={lutInputChange.bind(null,['newItem'],'new')}/>
			</div>
		)
	}
})
