//newAction.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../helpers/Panel'
import ItemGroup from '../helpers/itemGroup'
import SelectGroup from '../helpers/selectGroup'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const list =this.props.list?this.props.list:{};
		const lutList =this.props.lutList?this.props.lutList:{};
		const actionTypes =this.props.actionTypes?this.props.actionTypes:{};
		const punishList =this.props.punishList?this.props.punishList:{};
		const newActions =this.props.newActions?this.props.newActions:0;
		const item =list[newActions]?list[newActions]:{};
		const name =item.name?item.name:'';
		const id =item.id?item.id:'';
		const gps =item.gps?item.gps:'';
		const type =item.type?item.type:'';
		const subType =item.subType?item.subType:'';
		const modelId =item.modelId?item.modelId:'';
		const success =item.success?item.success:'';
		const failure =item.failure?item.failure:'';
		const successMessage =success.message?success.message:'';
		const failureMessage =failure.message?failure.message:'';
		const lut =success.lut?success.lut:[];
		const punish =failure.punish?failure.punish:[];
		const actionInputChange =this.props.actionInputChange?this.props.actionInputChange:false;
		const actionArrayChange =this.props.actionArrayChange?this.props.actionArrayChange:false;
		const gallary =this.props.gallary?this.props.gallary:[];
		const models = gallary.map((value)=>{
				return {label:value.name,value:value.id}
		})
		let	  lutArr = [];
		let	  punishArr = [];
		let	  actionTypesArr = [];
		let	  actionSubTypesArr = [];
		let   key = 0;
		for(key in lutList)lutArr.push({label:lutList[key].label,value:lutList[key].id});

		for(key in punishList){
			punishArr.push({label:punishList[key].label,value:punishList[key].id});
		}

		for(key in actionTypes){
			actionTypesArr.push({label:actionTypes[key].name,value:actionTypes[key].id});
		}

		if(actionTypes[type]){
			for(key in actionTypes[type].subTypes){
				actionSubTypesArr.push({label:actionTypes[type].subTypes[key].name,value:actionTypes[type].subTypes[key].id});
			}
		}
		console.log('modelId',modelId);
		return(
			<div className='newAction'>
				<ItemGroup label='Название действия' iValue={name} func={actionInputChange.bind(null,['list',id,'name'])}/>
				<ItemGroup label='Место действия' iValue={gps} placeholder='координаты GPS.....' func={actionInputChange.bind(null,['list',id,'gps'])}/>
				<SelectGroup label='Тип дейсвия ' value={type} list={actionTypesArr} func={actionInputChange.bind(null,['list',id,'type'])}/>
				<SelectGroup style={actionSubTypesArr.length?{}:{display:'none'}} label='Поддействие' value={subType} list={actionSubTypesArr} func={actionInputChange.bind(null,['list',id,'subType'])}/>
				<SelectGroup label='3D модель' value={modelId} list={models} func={actionInputChange.bind(null,['list',id,'modelId'])}/>
				<Panel title='Условие успеха'>
					<ItemGroup label='Сообщение мастеру' iValue={successMessage} func={actionInputChange.bind(null,['list',id,'success','message'])}/>
					{lut.map((value,idx)=>{
						return (<ItemGroup
							label='Награда'
							key={idx}
							iValue={lutList[value]?lutList[value].label:value}
							disabled
							button='Убрать'
							buttonClick={actionArrayChange.bind(null,['list',id,'success','lut'],'delete',idx)}
							/>)
					})}
					<SelectGroup label='Награда' placeholder='Выбирите награду' value={''} func={actionArrayChange.bind(null,['list',id,'success','lut'],'add')} list={lutArr}/>
				</Panel>
				<Panel title='Условие провала'>
					<ItemGroup label='Сообщение мастеру' iValue={failureMessage} func={actionInputChange.bind(null,['list',id,'failure','message'])}/>
					{punish.map((value,idx)=>{
						return (<ItemGroup
									label='Штраф'
									key={idx}
									iValue={punishList[value]?punishList[value].label:value}
									disabled
									button='Убрать'
									buttonClick={actionArrayChange.bind(null,['list',id,'failure','punish'],'delete',idx)}
									/>)
					})}
					<SelectGroup label='Штрафы' placeholder='Выбирите штраф' list={punishArr} func={actionArrayChange.bind(null,['list',id,'failure','punish'],'add')}/>
				</Panel>
				<input type='button' value='Сохранить' onClick={()=>{actionInputChange(['newActions'],0)}}/>
			</div>
		)
	}
})
