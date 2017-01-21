//Log.jsx
import React from 'react'
import Panel from './helpers/Panel'
import {logTitle} from '../vars'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
    mixins:[PureRenderMixin],
    render(){
        //const{}=this.props
        return(
            <div className='Log'>
                <Panel title={logTitle}>

                </Panel>
            </div>
        )
    },
    componentWillMount() {
        this.props.getRemoteData('REMOTE_LOG');
    }
})
