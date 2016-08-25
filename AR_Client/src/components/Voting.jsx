//Voting.jsx
import React, { Component } from 'react'
import Winner from './winner'
import Vote from './Vote'

class Voting extends Component{
	render(){
		const{
			winner='',
		}=this.props;
		return(
			<div className="voting">
				{winner!=''?<Winner ref="winner" winner={winner}/>:<Vote {...this.props}/>}
			</div>
		)
	}
};

export default Voting;
