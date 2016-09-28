//actionTable.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const list =this.props.list?this.props.list:[]
		const template =this.props.template?this.props.template:{}
		//const id =value.id?value.id:'#'
		//const name =value.name?value.name:''
		//const gps =value.gps?value.gps:''
		//const status =value.status?value.status:''
		const actionInputChange =this.props.actionInputChange?this.props.actionInputChange:false
		const actionDelete =this.props.actionDelete?this.props.actionDelete:false
		const keys = Object.keys(list);
		return(
			<div className='actionTable'>
				<table className='table table-bordered table-hover'>
					<thead>
						<tr>
							<th>id</th>
							<th>Имя действия</th>
							<th>Координаты</th>
							<th>Управление</th>
						</tr>
					</thead>
					<tbody>
						{keys.map((value,idx)=>{
							return(
								<tr key={idx}>
									<td>{list[value].id}</td>
									<td>{list[value].name}</td>
									<td>{list[value].gps}</td>
									<td>
										<div className='botton-group'>
											<input type='button' value='Редактировать' onClick={()=>{actionInputChange(['newActions'],list[value].id)}}/>
											<input type='button' value='Удалить' onClick={()=>{actionDelete(['list'],'delete',list[value].id)}}/>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<input type='button' value='Добавить действие' onClick={()=>{
					actionDelete(['list'],'add',template);
					actionInputChange(['newActions'],'new')
					}}
				/>
			</div>
		)
	}
})
