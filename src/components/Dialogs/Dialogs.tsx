import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DispatchToPropsType, StateToPropsType} from "./DialogsContainer";


export const Dialogs = (props: StateToPropsType & DispatchToPropsType) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    const sendMessageClick = () => {
        props.SendMessage()
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
                    <div>
                        <button onClick={sendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}