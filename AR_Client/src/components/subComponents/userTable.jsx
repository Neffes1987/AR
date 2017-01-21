//userTable.jsx
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
    mixins:[PureRenderMixin],
    componentWillMount() {
        this.props.getRemoteData('REMOTE_BD');
    },
    render(){
        const DBList = this.props.DBList?this.props.DBList:{};
        const roles = this.props.roles[0]?this.props.roles[0]:{};
        const DBInputChange = this.props.DBInputChange;
        const DBGChange = this.props.DBGChange;
        let dbArr=[];
        for (let key in DBList){
            const contacts = DBList[key].contacts?DBList[key].contacts:{};
            const mail = contacts.mail?contacts.mail:'';
            const phone = contacts.phone?contacts.phone:'';
            const skype = contacts.skype?contacts.skype:'';
            const social = contacts.social?contacts.social:'';
            let role = DBList[key].role.map((value,idx)=>{return(<p key={idx}>{roles[value]?roles[value]:'Роль удалена из базы!'}</p>)});
            dbArr.push(
                <tr key={key}>
                    <td>{DBList[key].fname + ' ' + DBList[key].lname}</td>
                    <td className='text-left'>{role}</td>
                    <td className='text-left'>
                        {mail?<p>Почта: <a href={'mailto:'+mail}>{mail}</a></p>:''}
                        {phone?<p>Телефон: <a href={'tel:'+phone}>{phone}</a></p>:''}
                        {skype?<p>Skype: <a href={'skype:'+skype}>{skype}</a></p>:''}
                        {social?<p>Соц. Сеть: <a href={social}>{social}</a></p>:''}
                    </td>
                    <td>
                        <input type='button' value='Редактировать' onClick={DBInputChange.bind(null,['editItem'],key)}/>
                        <input type='button' value='Удалить' onClick={DBGChange.bind(null,['DBList'],'delete',key)}/>
                    </td>
                </tr>
            );
        }
        return(
            <table>
                <tbody>
                    <tr>
                        <td>Имя</td>
                        <td>Роль</td>
                        <td>Контакты</td>
                        <td>Управление</td>
                    </tr>
                    {dbArr}
                </tbody>
            </table>
        )
    }
})
