//Voting.jsx
import React from 'react'
//import * as action_creator from '../action_creator'
import Menu from './helpers/navigation'
//import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Main = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		//const{}=this.props
		return(
			<div className='container-fluid'>
				<div className='row'>
					<Menu bsClass='col-md-3'/>
				</div>
			</div>
		)
	}
})
//function mapStateToProps(state){
	//console.log('vooting=',state.toJS());
	//return {
		///pair:state.getIn(['vote','pairs']),
		//tally:state.getIn(['vote','tally']),
		//hasVoted:state.get('hasVoted')!=undefined?state.get('hasVoted'):'',
	//}
//}
//export const Voting_conteiner = connect(mapStateToProps,action_creator)(Voting);
