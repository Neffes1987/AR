//imageItem.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ItemGroup from '../helpers/itemGroup'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const img=this.props.img?this.props.img:'no_image.png';
		const name=this.props.name!=undefined?this.props.name:'Имя не назначено';
		const open=this.props.open?this.props.open:0;
		const description=this.props.description?this.props.description:'Добавить новую модель';
		const id=this.props.idx!=undefined?this.props.idx+'':'newID';
		const filename=this.props.filename?this.props.filename:'';
		//const onOpen=this.props.onOpen?this.props.onOpen:false;
		const onItemChange=this.props.onItemChange?this.props.onItemChange:false;
		//onClick={onItemChange(['modelsList',id,'open'],1)}
		console.log('this.props',this.props)
		return(
			<div className={open?'pull-left col-md-12 borderItem':' pull-left col-md-4'}>
				<button
					type='button'
					style={{display:open?'block':'none'}}
					className='close'
					aria-hidden='true'
					onClick={()=>{onItemChange(['modelsList',id,'open'],0)}}
					>
						&times;
				</button>
				<div className={open?'img-thumbnail imageBox  pull-left':'img-thumbnail imageBox'}>
					<img src={'/images/'+img} className='galImages  center-block' />
					<div className='blurWithName text-center'  onClick={()=>{!open?onItemChange(['modelsList',id,'open'],1):false}}><div>{name}</div></div>
				</div>

				<div style={{display:open?'block':'none'}} className={'col-md-9'}>
					<ItemGroup label='Имя модели' iValue={name} func={onItemChange.bind(null,['modelsList',id,'name'])}/><br/>
					<ItemGroup label='Заменить модель' iValue={filename} type='file' func={onItemChange.bind(null,['modelsList',id,'filename'])}/><br/>
					<ItemGroup label='Комментарий' iValue={description} type='text' placeholder='Краткое описание модели' func={onItemChange.bind(null,['modelsList',id,'description'])}/><br/>
				</div>


			</div>
		)
	}
})
