//Characters.jsx
import React from 'react'
import Panel from './helpers/Panel'
import CharTable from './subComponents/CharTable'
import ClassTable from './subComponents/classTable'
import {character} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import { connect } from 'react-redux'

export const char = React.createClass({
	mixins:[PureRenderMixin],
	render(){
		return(
			<div className='Characters'>
				<Panel title={character.char}>
					<CharTable {...this.props}/>
				</Panel>
				<Panel title={character.class}>
					<ClassTable {...this.props}/>
				</Panel>
			</div>
		)
	}
})


const mapStateToProps = function(store) {
    return {
		charList:store.char.getIn(['charList']).toJS(),
		classList:store.char.getIn(['classList']).toJS(),
		classTemplate:store.char.getIn(['classTemplate']),
		charTemplate:store.char.getIn(['charTemplate']).toJS(),
		filterValue:store.char.getIn(['filterValue']),
		newClass:store.char.getIn(['newClass']),
		newChar:store.char.getIn(['newChar'])
    }
};


const char_conteiner = connect(mapStateToProps, action_creator)(char);

export default char_conteiner
