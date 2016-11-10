//Lut_new.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ItemGroup from '../helpers/itemGroup'


export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const newItem=this.props.newItem?this.props.newItem:0;
		const lutItem=this.props.lutList[newItem]?this.props.lutList[newItem]:{};
		const lutItemCList=lutItem.charList?lutItem.charList:{};
		const label=lutItem.label?lutItem.label:'';
		const img=lutItem.img?lutItem.img:'';
		const charList=this.props.charList?this.props.charList:{};
		const lutInputChange=this.props.lutInputChange?this.props.lutInputChange:false;
			let charArr=[];
		for (let key in charList){
			let value = lutItemCList[key]?lutItemCList[key]:'';
			charArr.push(<ItemGroup key={key}
				label={charList[key].name}
				iValue={value}
				func={lutInputChange.bind(null,['lutList',newItem,'charList',key])}
				type='number'
				/>);
		}
		return(
			<div className='Lut_new'>
				<h3 className='text-center'>{'Предмет: ' +  label}</h3>
				<form encType='multipart/form-data' onSubmit={(e)=>{
						e.preventDefault();
						lutInputChange(['newItem'],0);
						}}>
					<div className='col-md-10' >
						<ItemGroup
							label='Название'
							iValue={label}
							func={lutInputChange.bind(null,['lutList',newItem,'label'])}
							placeholder='Укажите название предмета'
							required

							/>
					</div>
					<img src={img} className='abs_icon' alt={label}/>
					<div className='col-md-10' >
						<ItemGroup
						label='Иконка'
						type='file'
						func={false}
						placeholder='Укажите иконку предмета'
						required
						/>
					</div>
					<div className='col-md-6'>
						{charArr}
					</div>
					<div className='clearfix'></div>
					<input type='submit' value = 'Сохранить'/>
				</form>
			</div>
		)
	}
})

