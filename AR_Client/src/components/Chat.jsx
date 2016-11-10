//Chat.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {chatTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='Chat'>
				<Panel title={chatTitle}>
					<div className='row'>
						<div className='col-md-8'>
							<div className='chatBox'>
								<div className='messageItem'>
									<span className='messageName'><a href='#'>Имя</a></span>
									<span className='messageText'>Тело сообщения</span>
									<span className='messageTime'>15.43 - 10.08.11</span>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='row'>
								<div className='list-group col-md-12'>
									<a href='#' className='list-group-item'><span className='badge'>1</span>Cras justo odio</a>
									<a href='#' className='list-group-item'><span className='badge'>1</span>Dapibus ac facilisis in</a>
									<a href='#' className='list-group-item'><span className='badge'>1</span>Morbi leo risus</a>
									<a href='#' className='list-group-item'><span className='badge'>1</span>Porta ac consectetur ac</a>
									<a href='#' className='list-group-item'><span className='badge'>1</span>Vestibulum at eros</a>
								</div>
							</div>
							<div className='row'>
								<p>От имени пользователя:</p>
								<p>Инкогнито:</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-8'>
							<textarea className='form-control'></textarea>
						</div>
					</div>
				</Panel>
			</div>
		)
	}
})
