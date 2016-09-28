//eventsEdit.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelectGroup from '../helpers/selectGroup'


export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const actions = this.props.actions?this.props.actions:{}
		const events = this.props.events?this.props.events:{};
		const newEvent = this.props.newEvent?this.props.newEvent:{};
		const eventItem = events[newEvent]?events[newEvent]:{};
		const actionsList = eventItem.actionsList?eventItem.actionsList:[];
		const actions = this.props.actions?this.props.actions:{};
		//const filterValue = this.props.filterValue?this.props.filterValue:'';
		const eventsInputChange = this.props.eventsInputChange?this.props.eventsInputChange:false;
		const list = [];
		for(let key in actions){list.push({value:key , label:actions[key].name})}

		return(
			<div className='Events'>
				<h3>Список прикрепленных действий: </h3>
				<table className='table table-bordered table-hover text-center'>
					<thead>
						<tr>
							<td>#</td>
							<td>Описание</td>
							<td>GPS координаты</td>
							<td>Убрать</td>
						</tr>
					</thead>
					<tbody>
						{actionsList.map((value,idx)=>{
							return(
							<tr key={idx}>
								<td>{actions[value].id}</td>
								<td>{actions[value].name}</td>
								<td>{actions[value].gps}</td>
								<td><input type='button' value='Убрать'/></td>
							</tr>
							)
						})}
					</tbody>
				</table>
				<SelectGroup label='Добавить действие' value={''} list={list}  />
				<input type='button' value='Сохранить' onClick={()=>{eventsInputChange(['newEvent'],0)}}/>
			</div>
		)
	}
})
