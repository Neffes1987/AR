//Events.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {eventTitle} from '../vars'
//import SelectGroup from './helpers/selectGroup'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import EventsTable from './subComponents/eventsTable'
import EventsEdit from './subComponents/eventsEdit'
import { connect } from 'react-redux'

export const Events =  React.createClass({
	mixins:[PureRenderMixin],
	render(){
		const newEvent = this.props.newEvent?this.props.newEvent:0;
		return(
			<div className='Events'>
				<Panel title={eventTitle}>
					{newEvent?<EventsEdit {...this.props}/>:<EventsTable {...this.props}/>}
				</Panel>
			</div>
		)
	}
})

const mapStateToProps = function(store) {
    return {
		eventsLen:store.events.getIn(['eventsList']).size,
		events:store.events.getIn(['eventsList']).toJS(),
		newEvent:store.events.getIn(['newEvent']),
		eventTemplate:store.events.getIn(['eventTemplate']),
		filterValue:store.events.getIn(['filterValue']),
		actions:store.actions.getIn(['list']).toJS()
    }
};


const Events_conteiner = connect(mapStateToProps, action_creator)(Events);

export default Events_conteiner
