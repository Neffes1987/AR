//Voting.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {introTitle} from  '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as action_creator from '../action_creator'
import { connect } from 'react-redux'
export const Intro_view =  React.createClass({
    mixins:[PureRenderMixin],
    render(){
        //const{}=this.props
        return(
            <div className='Intro'>
                <Panel title={introTitle}>

                </Panel>
            </div>
        )
    },
    componentWillMount() {
        this.props.getRemoteData('REMOTE_INTRO');
    }
})
const mapStateToProps = function() {
    return {}
};


const Intro = connect(mapStateToProps, action_creator)(Intro_view);
export default Intro
