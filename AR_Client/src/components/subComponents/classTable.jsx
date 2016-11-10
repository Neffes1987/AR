//ClassTable.jsx
import React from 'react'
import PanelCollapsible from '../helpers/PanelCollapsible'
import ItemGroup from '../helpers/itemGroup'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const charList = this.props.charList?this.props.charList:{};
		const classList = this.props.classList?this.props.classList:{};
		const classTemplate = this.props.classTemplate?this.props.classTemplate:{};
		const charInputChange = this.props.charInputChange?this.props.charInputChange:false;
		const charGChange = this.props.charGChange?this.props.charGChange:false;
		let key;
		let skey;
		let classMap=[];
		let charValues=[];
		for (key in classList)
		{
			charValues=[];
			for (skey in charList)
			{
				charValues.push(
					<div key={key+skey+':IG'}>
						<ItemGroup
							label = {'Модификатор:{'+charList[skey].name+'}'}
							iValue={classList[key].charValue[skey]?classList[key].charValue[skey]:''}
							func={charInputChange.bind(null,['classList',key,'charValue',skey])}
						/>
					</div>)
			}

			classMap.push(
				<PanelCollapsible title={classList[key].name} key={key+':PC'}>
						<ItemGroup label = 'Имя класса' iValue={classList[key].name} func={charInputChange.bind(null,['classList',key,'name'])}/>
						{charValues}
						<p>Описание</p>
						<textarea id={key} className='form-control' onChange={(e)=>{charInputChange(['classList',key,'description'],e.target.value)}}>{classList[key].description}</textarea><br/>
						<input type='button' value='Удалить' onClick={charGChange.bind(null,['classList'],'delete',key)}/>
				</PanelCollapsible>);
		}
		return(
				<div>
					{classMap}
					<input type='button' value='Добавить' onClick={charGChange.bind(null,['classList'],'add',classTemplate)}/>
				</div>
			)
	}
})
