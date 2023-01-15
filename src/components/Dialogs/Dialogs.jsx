import { NavLink } from 'react-router-dom'
import stylle from './Dialogs.module.css'
import DialogsItems from './DialogItem/DialogsItem'
import Messages from './Message/Message'
import { upDateNewMessageBodyCreator } from '../../redux/state'
import { sendMessageCreator } from '../../redux/state'
const Dialogs = (props) => {

    //let state = props.store.getState().DialogsPage

    let DialogsElements = props.DialogsData.DialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />)
    let MessagesElement = props.MessagesData.MessagesData.map(message => <Messages message={message.message} />)
    let newMessageBody = props.MessagesData.newMessageBody;
    //console.log(newMessageBody)
    //console.log(props.MessagesData.newMessageBody)
   // console.log(props.store.dispatch)
    let onNewMessageChange = (event) => {
        console.log('input changed: ', event.target.value)
        let body = event.target.value
        props.store.dispatch( upDateNewMessageBodyCreator(body))
    }

    const onSendMessageClick = () => {
        console.log('message sended')
        /*console.log(event)
        let body = event.target.value
        props.store.dispatch( upDateNewMessageBodyCreator(body))*/
        props.store.dispatch( sendMessageCreator())
    }
    return (
        <div className={stylle.dialogs}>
            <div className={stylle.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={stylle.messages}>
                <div>{MessagesElement}</div>
                <div>
                    <div>
                        <input onChange={onNewMessageChange} value={newMessageBody} type="text" placeholder='Enter you message' />
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs