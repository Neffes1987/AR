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
				<ul className='nav nav-pills nav-stacked'>
					<li><Link to={'/admin'} onlyActiveOnIndex activeClassName='active'>Главная</Link></li>

					<li><Link to={'/admin/Connection_settings'}  activeClassName='active'>Настройки соединения</Link></li>

					<li><Link to={'/admin/Main_settings'}  activeClassName='active'>Основные настройки</Link></li>

					<li><Link to={'/admin/Gallary'}  activeClassName='active'>Галерея Unity 3D</Link></li>

					<li><Link to={'/admin/Actions'}  activeClassName='active'>Действия</Link></li>

					<li><Link to={'/admin/Events'}  activeClassName='active'>События</Link></li>

					<li><Link to={'/admin/Lut'}  activeClassName='active'>Предметы и артефакты</Link></li>

					<li><Link to={'/admin/Characters'}  activeClassName='active'>Характеристики и классы</Link></li>

					<li><Link to={'/admin/BD'}  activeClassName='active'>База игроков</Link></li>

					<li><Link to={'/admin/Chat'}  activeClassName='active'>Чат</Link></li>

					<li><Link to={'/admin/Log'}  activeClassName='active'>Лог событий</Link></li>
				</ul>
			</div>

		)
}})
