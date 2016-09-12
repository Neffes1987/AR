//Voting.jsx
import React from 'react'
import Winner from './winner'
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const{
			winner='',
		}=this.props
		return(
			<div className='voting'>
				{winner!=''?<Winner ref='winner' winner={winner}/>:<Vote {...this.props}/>}
			</div>
		)
	}
})
