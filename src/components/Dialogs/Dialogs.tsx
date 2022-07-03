import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DispatchToPropsType, StateToPropsType} from "./DialogsContainer";
import {NewMessageForm} from "./NewMessageForm";


export const Dialogs = (props: StateToPropsType & DispatchToPropsType) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div> {messagesElement} </div>
                <NewMessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}