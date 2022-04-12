import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

type DialogPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}


const Dialog = (props:DialogPropsType) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
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

    let dialogsElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
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