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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name='Arteta' id={1}/>
                <Dialog name='Bentdner' id={2}/>
                <Dialog name='Rio Miyachi' id={3}/>

            </div>
            <div className={s.messages}>
                <Message message='Who want play against Barselona?'/>
                <Message message='I can, but whats is Barselona?'/>
                <Message message='i got you coach, i dont'/>

            </div>
        </div>
    )
}