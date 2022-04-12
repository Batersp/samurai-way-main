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
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Arteta'},
        {id: 2, name: 'Bentdner'},
        {id: 3, name: 'Rio Miyachi'}
    ]

    let messages = [
        {id: 1, message: 'Who want play against Barselona?'},
        {id: 2, message: 'I can, but whats is Barselona?'},
        {id: 3, message: 'i got you coach, i dont'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message}/>)



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