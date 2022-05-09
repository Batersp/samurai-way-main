import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/state";
import {sendMessage, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsType = {
   store: StoreType
}


export const Dialogs: React.FC<DialogsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    const sendMessageClick = () => {
        props.store.dispatch(sendMessage())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
               <div> {messagesElement} </div>
                <div>
                    <div><textarea
                        placeholder='Enter your message'
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    /></div>
                    <div><button onClick={sendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}