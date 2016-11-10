//main_settings.jsx
import React from 'react'
import Panel from './helpers/Panel'
import ItemGroup from './helpers/itemGroup'
import SelectGroup from './helpers/selectGroup'
import {mainSetting} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		const users = [
			{label: 'Вячеслав', value:1},
			{label: 'Виктория', value:2},
			{label: 'Алексей', value:3},
			{label: 'Дмитрий', value:4},
			{label: 'Антон', value:5},
			{label: 'Руслан', value:6},
			]
		return(
			<div className='main_settings'>
				<Panel title={mainSetting.title}>
					<ItemGroup label='Название проекта' iValue='' func={false} placeholder='Укажите адрес вашего проекта'/><br/>
					<ItemGroup label='Дата проведения' iValue='' func={false} placeholder='Укажите дату начала проекта'/><br/>
					<ul className='list-group'>
						<li className='list-group-item'>
							<div className='form-group'>
								<label htmlFor='presentation'>Вводная для проекта</label>
								<textarea id='presentation' rows='15' className='form-control'></textarea>
							</div>
						</li>
						<li className='list-group-item'>
							<h3 className='text-center'>{mainSetting.contats}</h3>
							<table className='table table-bordered table-hover text-center'>
								<thead>
									<tr>
										<td>#</td>
										<td>Имя</td>
										<td>Фамилия</td>
										<td>Ник</td>
										<td>Контакт для связи</td>
										<td>Убрать</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Вячеслав</td>
										<td>Новицкий</td>
										<td>Неффес</td>
										<td>Icq: 311219870</td>
										<td><input type='button' value = 'Убрать' /></td>
									</tr>
									<tr>
										<td>2</td>
										<td>Виктория</td>
										<td>Татаринцева</td>
										<td>Дюдюка</td>
										<td><a href='www.vk.com?id=3333333'>vk: www.vk.com?id=3333333</a></td>
										<td><input type='button' value = 'Убрать' /></td>
									</tr>
								</tbody>
							</table>
							<SelectGroup label='Выбирите пользователя из списка' value={1} list = {users}/><br/>
							<div className='clearfix'></div>
						</li>
					</ul>
				</Panel>
			</div>
		)
	}
})
