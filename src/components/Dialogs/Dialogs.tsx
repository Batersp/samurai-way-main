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

    let dialogsData = [
        {id: 1, name: 'Arteta'},
        {id: 2, name: 'Bentdner'},
        {id: 3, name: 'Rio Miyachi'}
    ]

    let messagesData = [
        {id: 1, message: 'Who want play against Barselona?'},
        {id: 2, message: 'I can, but whats is Barselona?'},
        {id: 3, message: 'i got you coach, i dont'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>
        </div>
    )
}