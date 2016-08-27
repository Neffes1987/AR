//Vote.jsx
import React from 'react'

export default React.createClass({
	render(){
		const{
			pair,
			vote,
			hasVoted='',
		}=this.props;
		console.log(this.props);
		function hasVotedFor(entry){return hasVoted===entry}
		return(
			<div className='btn'>
				{pair.map(entry=>
				<button
					key={entry}
					disabled={hasVotedFor(entry)?true:false}
					onClick={()=>vote(entry)}>
						<h1>{entry}</h1>
					{hasVotedFor(entry)?<div className='label'>Voted</div>:''}
				</button>)}
			</div>
		)
	}
})
