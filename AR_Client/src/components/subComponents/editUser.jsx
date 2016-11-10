//editUser.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ItemGroup from '../helpers/itemGroup'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const DBList = this.props.DBList?this.props.DBList:{};
		const charList = this.props.charList?this.props.charList:{};
		const lutList = this.props.lutList?this.props.lutList:{};
		const editItem = this.props.editItem?this.props.editItem:1;
		const roles = this.props.roles?this.props.roles:{};
		const DBInputChange = this.props.DBInputChange;
		const DBListChange = this.props.DBListChange;
		const userData= DBList[editItem]?DBList[editItem]:{};
		const fname = userData.fname?userData.fname:'';
		const lname = userData.lname?userData.lname:'';
		const login = userData.login?userData.login:'';
		const password = userData.password?userData.password:'';
		const contacts = userData.contacts?userData.contacts:{};
		const mail = contacts.mail?contacts.mail:'';
		const phone = contacts.phone?contacts.phone:'';
		const skype = contacts.skype?contacts.skype:'';
		const social = contacts.social?contacts.social:'';
		const gameName = userData.gameName?userData.gameName:'';
		const gameClass = userData.gameClass?userData.gameClass:'';
		const gameGuild = userData.gameGuild?userData.gameGuild:'';
		const gameChar = userData.gameChar?userData.gameChar:{};
		const gameLut = userData.gameLut?userData.gameLut:{};
		const role = userData.role?userData.role:'';
		let roleTab=[];
		let charTab=[];
		let lutTab=[];

		for(let key in roles){
			roleTab.push(
				<div className='input-group input-group-sm check-block pull-left' key={key+'roles'}>
					<span className='input-group-addon'>{roles[key]}</span>
					<input type='checkbox' checked={role.indexOf(key)!=-1?true:false} name={key} onChange={(e)=>{
						const keyId=String($(e.target).attr('name'));
						DBListChange(['DBList',editItem,'role'],e.target.checked?'add':'delete',keyId);
					}}/>
				</div>)
		}



		for(let key in gameChar){
			charTab.push(<div className='col-md-4'  key={key+'char'}><ItemGroup label={charList[key].name} func={DBInputChange.bind(null,['DBList',editItem,'gameChar',key])} type='number' iValue={gameChar[key]}/></div>)
		}
		for(let key in gameLut){
			lutTab.push(<div className='col-md-4'  key={key+'lut'}><ItemGroup label={lutList[key].label} func={DBInputChange.bind(null,['DBList',editItem,'gameLut',key])} type='number'  iValue={gameLut[key]}/></div>)
		}
		return(
			<div className='editUser'>
				<h4>Тип учетной записи</h4>
				{roleTab}
				<div className='clearfix'></div>
				<h4>Не игровая информация </h4>
				<ItemGroup label='Имя' iValue={fname} func={DBInputChange.bind(null,['DBList',editItem,'fname'])}/>
				<ItemGroup label='Фамилия' iValue={lname} func={DBInputChange.bind(null,['DBList',editItem,'lname'])}/>
				<ItemGroup label='Логин' iValue={login} func={DBInputChange.bind(null,['DBList',editItem,'login'])}/>
				<ItemGroup label='Пароль' iValue={password} func={DBInputChange.bind(null,['DBList',editItem,'password'])}/>

				<h4>Контакты</h4>
				<ItemGroup label='E-Mail' iValue={mail} func={DBInputChange.bind(null,['DBList',editItem,'contacts','mail'])}/>
				<ItemGroup label='Телефон' iValue={phone} func={DBInputChange.bind(null,['DBList',editItem,'contacts','phone'])}/>
				<ItemGroup label='Skype' iValue={skype} func={DBInputChange.bind(null,['DBList',editItem,'contacts','skype'])}/>
				<ItemGroup label='Соц.сеть' iValue={social} func={DBInputChange.bind(null,['DBList',editItem,'contacts','social'])}/>


				<h4>Игровая информация</h4>
				<ItemGroup label='Игровое имя' iValue={gameName} func={DBInputChange.bind(null,['DBList',editItem,'gameName'])}/>
				<ItemGroup label='Игровой класс' iValue={gameClass} func={DBInputChange.bind(null,['DBList',editItem,'gameClass'])}/>
				<ItemGroup label='Гильдия, группа' iValue={gameGuild} func={DBInputChange.bind(null,['DBList',editItem,'gameGuild'])}/>

				<h4>Характеристики персонажа</h4>
				<div className='row'>{charTab}</div>
				<h4>Список предметов</h4>
				<div className='row'>{lutTab}</div>
				<input type='button' value='Сохранить' onClick={DBInputChange.bind(null,['editItem'],0)}/>
				<input type='button' value='Назад' onClick={DBInputChange.bind(null,['editItem'],0)}/>
			</div>
		)
	}
})
