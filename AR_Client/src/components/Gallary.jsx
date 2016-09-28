//Gallary.jsx
import React from 'react'
import Panel from './helpers/Panel'
import ItemGroup from './helpers/itemGroup'
import {GallaryTitle} from '../vars'
import ImgItem from './subComponents/imageItem'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import { connect } from 'react-redux'

export const Gallary = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		const gallary = this.props.gallary!=undefined?this.props.gallary:[];
		const newModel =  this.props.newModel? this.props.newModel:{};
		const filterValue = this.props.filterValue!=undefined?this.props.filterValue:'';
		const gallaryInputChange = this.props.gallaryInputChange!=undefined?this.props.gallaryInputChange:false;
		const gallaryListChange = this.props.gallaryListChange!=undefined?this.props.gallaryListChange:false;
		//console.log('gallary',gallary);
		return(
			<div className='Gallary'>
				<Panel title={GallaryTitle}>
					<div className='col-md-4'>
						<ItemGroup label='Поиск' iValue={filterValue} func={gallaryInputChange.bind(null,['filterValue'])}/>
					</div>
					<div className='clearfix'></div>
					<div className='imageGallary'>
					{
						gallary.map((value,idx)=>{
							if(filterValue!='' && value.name.toLowerCase().indexOf(filterValue.toLowerCase())==-1) return false;
							return <ImgItem
										key={idx} idx={idx} {...value} onItemChange={gallaryInputChange} />
						})
					}
						<ImgItem onItemChange={gallaryListChange.bind(null,['modelsList'],'add',newModel)}/>
					</div>
				</Panel>
			</div>
		)
	}
})

const mapStateToProps = function(store) {
    return {
		gallary:store.model3D.getIn(['modelsList']).toJS(),
		newModel:store.model3D.getIn(['newModel']),
		filterValue:store.model3D.getIn(['filterValue'])
    }
};
const Gallary_conteiner = connect(mapStateToProps, action_creator)(Gallary);

export default Gallary_conteiner
