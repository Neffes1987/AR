//Wrapper.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

export const Wrapper = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		return(
			<div className='innrer'>
				<h3>gHBDTN</h3>
				<Link to={'admin/'}  activeClassName='active'>admin</Link>
				{this.props.children}
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
