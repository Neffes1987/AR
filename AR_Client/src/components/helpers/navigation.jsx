//navigation.jsx

import React from 'react'
import {Link} from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const {bsClass} = this.props;
		return(
			<div className={'form-group '+bsClass}>
				<h3 className='bg-primary'>Меню</h3>
				<ul className='nav nav-pills nav-stacked'>
					<li><Link to={'/connection settings'}  activeClassName='active'>Настройки соединения</Link></li>

					<li><Link to={'/main settings'}  activeClassName='active'>Основные настройки</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>Галерея Unity 3D</Link></li>

					<li><Link to={'/Actions'}  activeClassName='active'>Действия</Link></li>

					<li><Link to={'/Events'}  activeClassName='active'>События</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>Предметы и артефакты</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>Характеристики и классы</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>База игроков</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>Чат</Link></li>

					<li><Link to={'/connection setting'}  activeClassName='active'>Лог событий</Link></li>
				</ul>
			</div>

		)
}})
