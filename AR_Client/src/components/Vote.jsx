//Vote.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const{
			pair,
			vote,
			hasVoted,
		}=this.props;
		function hasVotedFor(entry){return hasVoted===entry}
		return(
			<div className='form-inline'>
				<h4>Привет</h4>
				{pair.map(entry=>
				<button
					className='form-control btn btn-danger'
					key={entry}
					disabled={hasVoted==entry?true:false}
					onClick={()=>vote(entry)}>
						<h1>{entry}</h1>
					{hasVotedFor(entry)?<div className='label'>Voted</div>:''}
				</button>)}
			</div>
		)
	}
})
