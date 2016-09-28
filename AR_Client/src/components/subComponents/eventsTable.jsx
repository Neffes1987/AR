//eventsTable.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ItemGroup from '../helpers/itemGroup'


export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const actions = this.props.actions?this.props.actions:{}
		const events = this.props.events?this.props.events:{};
		const filterValue = this.props.filterValue?this.props.filterValue:'';
		const eventsInputChange = this.props.eventsInputChange?this.props.eventsInputChange:'';
		let   eventsArray = [];
		for(let key in events){
			if(filterValue!='' && events[key].name.toLowerCase().indexOf(filterValue.toLowerCase())==-1) continue;
			let bsCass='';
			let text = '';
			switch(events[key].status){
				case '0': bsCass='label label-danger';text='Провален'; break;
				case '1': bsCass='label label-info'; text='В работе'; break;
				case '2': bsCass='label label-success'; text='Выполнен';
			}
			eventsArray.push(
				<tr key={key}>
						<td>{events[key].id}</td>
						<td>{events[key].name}</td>
						<td><span className={bsCass}>{text}</span></td>
						<td>{events[key].description}</td>
						<td>{events[key].actionsList.length}</td>
						<td>
							<div className='button-group'>
								<input type='button' value='Редактировать' onClick={()=>{eventsInputChange(['newEvent'],events[key].id)}}/>
								<input type='button' value='Убрать'/>
							</div>
						</td>
				</tr>
			)
		}
		console.log('events=',events)
		return(
			<div className='Events'>
				<ItemGroup label='Поиск' iValue={filterValue} func={eventsInputChange.bind(null,['filterValue'])}/>
				<table className='table table-bordered table-hover text-center'>
					<thead>
						<tr>
							<td>#</td>
							<td>Имя</td>
							<td>Статус</td>
							<td>Описание</td>
							<td style={{width:'15%'}}>Действий</td>
							<td>Редактировать/Убрать</td>
						</tr>
					</thead>
					<tbody>
						{eventsArray}
					</tbody>
				</table>
				<input type='button' value='Добавить новый' onClick={()=>{eventsInputChange(['newEvent'],'new')}}/>
			</div>
		)
	}
})
