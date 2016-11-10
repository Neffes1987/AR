//eventsEdit.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelectGroup from '../helpers/selectGroup'
import ItemGroup from '../helpers/itemGroup'


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
		const eventsListChange = this.props.eventsListChange?this.props.eventsListChange:false;
		const list = [];
		for(let key in actions){list.push({value:key , label:actions[key]?actions[key].name:''})}
		console.log('events=',events);
		return(
			<div className='Events'>
				<h3>Список прикрепленных действий: </h3>
				<ItemGroup label='Имя' iValue={eventItem.name} func={eventsInputChange.bind(null,['eventsList',newEvent,'name'])} placeholder='Укажите имя события'/>
				<ItemGroup label='описание' iValue={eventItem.description} func={eventsInputChange.bind(null,['eventsList',newEvent,'description'])} placeholder='Укажите имя события'/>
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
								<td>{idx+1}</td>
								<td>{actions[value].name}</td>
								<td>{actions[value].gps}</td>
								<td><input type='button' value='Убрать' id={idx} onClick={(e)=>{eventsListChange(['eventsList',newEvent,'actionsList'],'delete',e.target.id)}}/></td>
							</tr>
							)
						})}
					</tbody>
				</table>
				<SelectGroup label='Добавить действие' value={''} func={eventsListChange.bind(null,['eventsList',newEvent,'actionsList'],'add')} list={list}  />
				<input type='button' value='Сохранить' onClick={()=>{eventsInputChange(['newEvent'],0)}}/>
			</div>
		)
	}
})
