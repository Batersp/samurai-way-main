import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
    id?: number
}

export type DialogsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

export const Dialogs: React.FC<DialogsType> = (props) => {


    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}