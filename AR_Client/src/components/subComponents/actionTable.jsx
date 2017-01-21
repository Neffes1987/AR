//actionTable.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
    mixins:[PureRenderMixin],
    componentWillMount() {
        this.props.getRemoteData('REMOTE_ACTIONS');
    },
    render(){
        const list =this.props.list?this.props.list:[]
        const template =this.props.template?this.props.template:{}
        const actionInputChange =this.props.actionInputChange?this.props.actionInputChange:false
        const actionDelete =this.props.actionDelete?this.props.actionDelete:false
        const keys = Object.keys(list);
        return(
            <div className='actionTable'>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Имя действия</th>
                            <th>Координаты</th>
                            <th>Управление</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keys.map((value,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{list[value].id}</td>
                                    <td>{list[value].name}</td>
                                    <td>
                                        latitude: {list[value].gps.lat}<br/>
                                        longitude: {list[value].gps.lut}
                                    </td>
                                    <td>
                                        <div className='botton-group'>
                                            <input type='button'
                                                value='Редактировать'
                                                id = {list[value].id}
                                                onClick={(e)=>{
                                                    const id = e.target.id;
                                                    actionInputChange(['newActions'],id);
                                                }
                                            }/>
                                        <input type='button'
                                            value='Удалить'
                                            id = {list[value].id}
                                            onClick={(e)=>{
                                                const id = e.target.id;
                                                actionDelete(['list'],'delete',id)}}/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <input type='button' value='Добавить действие' onClick={()=>{
                    actionDelete(['list'],'add',template);
                    actionInputChange(['newActions'],'new')
                    }}
                />
            </div>
        )
    }
})
