//connections.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {connectionTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='connections'>
				<Panel title={connectionTitle}>
					<ul className='list-group'>
						<li className='list-group-item'>
							<div className='input-group'>
								<span className='input-group-addon'>Хост</span>
								<input type='text' className='form-control' placeholder='Укажите адрес вашего сервера'/>
							</div>
						</li>
						<li className='list-group-item'>
							<div className='input-group'>
								<span className='input-group-addon'>Порт</span>
								<input type='text' className='form-control' placeholder='Укажите порт для доступа к серверу'/>
							</div>
						</li>
						<li className='list-group-item'>
								<label className='checkbox-inline'>
									<input type='checkbox' id='inlineCheckbox1' value='option1' checked={true}/>  оповещать клиента о потере связи?
								</label>
						</li>
					</ul>
				</Panel>
			</div>
		)
	}
})
