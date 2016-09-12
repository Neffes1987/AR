//Results.jsx
import React from 'react'
import * as action_creator from '../action_creator'
import Winner from './winner'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

export const Result = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const {pair, tally ,  winner=''} = this.props;
		function getEntry(entry){
			if (tally&&tally.has(entry)) return tally.get(entry);
			else return 0;
		}
		return(
			<div>
				{winner==''?
				<div>
					<h3>Result page</h3>
					<p>Текущий чарт:</p>
						{pair.map(entry=>
							<div key={entry} className='entry'>
							<h1>score: {entry}\{getEntry(entry)}</h1>
							</div>)
						}
				</div>
				:
				<Winner ref='winner' className='111' winner={winner}/>
				}
			<div><input type='button' value='Next' onClick={this.props.next}/></div>
			</div>
			)
	}

})
function mapStateToProps(state){
	return {
		pair:state.getIn(['vote','pairs']),
		tally:state.getIn(['vote','tally']),
		winner:state.get('winner')
	}
}
export const Result_container = connect(mapStateToProps,action_creator)(Result);
