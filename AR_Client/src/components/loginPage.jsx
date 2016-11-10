//loginPage.jsx

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from './helpers/Panel'
import ItemGroup from './helpers/itemGroup'
import Alert from './helpers/alert'
import { connect } from 'react-redux'
import * as action_creator from '../action_creator'
import {autorization} from '../vars'

export const logIn_view = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const AlertChange=this.props.AlertChange;
		const data=this.props.data?this.props.data:{};
		const restore=this.props.restore?this.props.restore:'';
		const login=data.login?data.login:'';
		const email=data.email?data.email:'';
		const password=data.password?data.password:'';
		const SingInChange=this.props.SingInChange;
		const loginIncorrect=autorization.loginIncorrect?autorization.loginIncorrect:{};
		return(
			<div className='loginPage row-area'>
				<div className='column'></div>
				<div className='column'>
					<Panel title={!restore?'Авторизация':'Восстановление пароля'}>
						<ItemGroup label={!restore?'Логин':'Введите емаил'} iValue={!restore?login:email} func={SingInChange.bind(null,['data',!restore?'login':'email'])}/>
						{!restore?<ItemGroup label='Пароль' type='password' iValue={password} func={SingInChange.bind(null,['data','password'])}/>:''}
						<input type='button' value='OK' onClick={AlertChange.bind(null,['data'],loginIncorrect)}/>
						<input type='button' value={!restore?'Восстановить пароль':'Отмена'} onClick={SingInChange.bind(null,['restore'],!restore?'1':'')}/>
					</Panel>
					<Alert alert={this.props.alert} AlertChange={AlertChange}/>
				</div>
				<div className='column'></div>
			</div>
		)
}})
function mapStateToProps(state){
	return {
		alert:state.alert.getIn(['data']).toJS(),
		data:state.autorization.getIn(['data']).toJS(),
		restore:state.autorization.getIn(['restore'])
	}
}
export const logIN_conteiner = connect(mapStateToProps,action_creator)(logIn_view);
export default logIN_conteiner
